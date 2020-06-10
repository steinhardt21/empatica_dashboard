import Layout from '../components/Layout';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Downloads from '../components/Downloads';


//The client makes the request to the server via ApolloClient for GraphQL server
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});


function Home() {
  return (

      <ApolloProvider client={client}>
        <Layout>
          <div>
            
            <Downloads />
           
          </div>
        </Layout>
      </ApolloProvider>
  )
}

export default Home