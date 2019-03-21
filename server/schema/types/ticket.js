const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const TicketType = new GraphQLObjectType({
    name: 'Ticket',
    fields: {
        id: {
            type: GraphQLID
        },
        problem: {
            type: GraphQLString
        },
        problemDescription: {
            type: GraphQLString
        },
        emailAddress: {
            type: GraphQLString
        },
        contactNumber: {
            type: GraphQLString
        }
    }
});

module.exports = TicketType;