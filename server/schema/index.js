const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull ,GraphQLString } = require('graphql');
const TicketType = require('./types/ticket');
const TicketInput = require('./types/ticket-input');

const Queries = new GraphQLObjectType({
    name: 'Queries',
    fields: {
        tickets: {
            type: new GraphQLList(TicketType),
            resolve: async (root, args, { dbMethods}, ast) => {
                try {
                    const tickets = await dbMethods.get();
                    return tickets
                } catch(err) {
                    return err;
                }                
            }
        },
        ticket: {
            type: TicketType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async(root, { id }, { dbMethods }, ast) => {                 
                try {
                    const ticket = dbMethods.getOne(id);
                    return ticket;
                } catch(err) {
                    return err;
                }                
            }
        }
    }
});
const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createTicket: {
            type: TicketType,
            args: {
                input: {
                    type: new GraphQLNonNull(TicketInput)
                }
            },
            resolve: async (root, { input }, { dbMethods }, ast) => {    
                    try {             
                        const newTicket = await dbMethods.create(input);
                        return newTicket;
                    } catch(err) {                        
                        return err;
                    }                                
            }
        }
    }
})
const schema = new GraphQLSchema({
    query: Queries,
    mutation: Mutations
});

module.exports = schema;