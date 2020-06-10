/********
 * Quries that GraphQL server executes for the client 
*/

const axios = require('axios');
const{ db } = require("../pgAdaptor"); // Connection to database to query

// Type of variables involved
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { DownloadType } = require("./types");


// The rootquery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: 
    {
        downloads: 
        {
            type: GraphQLList(DownloadType),
            resolve(parentValue, args)
            {
                
                /**** QUERYING THE local POSTGRESS database */
                /*    const query = 'SELECT * FROM download';

                    return db
                        .many(query, null)
                        .then(res => res)
                        .catch(err => err);
                */

                /**** QUERYING THE FAKE server JSON Server WITH axios */
                /***this only for testing reasons, without the need to implement a POSTGRES database */
                return axios.get('http://localhost:3002/downloads')
                    .then(res => res.data);
            }
        }
    }
  });
  
  exports.query = RootQuery;