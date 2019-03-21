const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const PORT = process.env.PORT || 5000;
const schema = require('./schema');
const DBConnect = require('./db');

DBConnect()
    .then(dbMethods => {
        console.log(`Connected to mongo db`);
        app.use('/graphql', graphqlHTTP({
            schema,
            graphiql: true,
            context: {
                dbMethods
            }
        }));        
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    })
    .catch(err => {
        console.error(`Error connecting to mongo db`);
        console.error(err);
    })
