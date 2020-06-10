//GraphQL - define the shape of our types

const graphql = require("graphql");

const {
    //Stard types for the GraphQL
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLScalarType
} = graphql;

// Implementation of a custome type in the case of the hour (HH:MM:SS)
var TimeType = new GraphQLScalarType({
    name: 'time',
    serialize: value =>
    {
        return value;
    },
    parseValue: value =>
    {
        return value;
    },
    parseLiteral: ast => {
        
        return ast.value;
      }
})

// Type of data received in querying the database
const DownloadType = new GraphQLObjectType({

    name: "Download",
    fields:
    {
        app_id:{type: GraphQLInt},
        longitude:{type: GraphQLFloat},
        latitude:{type: GraphQLFloat},
        downloaded_at: {type: TimeType}
    }
});

exports.DownloadType = DownloadType;