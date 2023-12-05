import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
const synApiToken = import.meta.env.VITE_APOLLO_CLIENT_SYN;
console.log();
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${synApiToken}`, 
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({ uri: 'https://syn-api-prod.herokuapp.com/graphql' }); 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
