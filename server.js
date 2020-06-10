/******GraphQL SERVER******************/

const graphql = require("graphql");
const express = require("express");
const expressGraphQl = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/query");
const cors = require('cors');


const app = express();

//Schema for the GraphQL server
const schema = new GraphQLSchema({
    query
  });
  
// Allow cross-origin
app.use(cors());

app.use(
    '/graphQL',
    expressGraphQl({
      schema: schema,
      graphiql: true
    })
  );
  
  
  app.listen(5000, () =>
    console.log('GraphQL server running on localhost:5000')
  );