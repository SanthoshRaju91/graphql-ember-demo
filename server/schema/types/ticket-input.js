const { GraphQLNonNull, GraphQLString, GraphQLInputObjectType } = require('graphql');

const TicketInput = new GraphQLInputObjectType({
    name: 'TicketInput',
    fields: {
        problem: {
            type: new GraphQLNonNull(GraphQLString)
        },
        problemDescription: {
            type: new GraphQLNonNull(GraphQLString)
        },
        emailAddress: {
            type: new GraphQLNonNull(GraphQLString)
        },
        contactNumber: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

module.exports = TicketInput;
