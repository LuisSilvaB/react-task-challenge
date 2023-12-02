import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
const synApiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiMmVlZjU2NmItYWQ1Ny00YTA1LTllNDUtM2QyMWU1Zjc3YTFlIiwicHJvamVjdElkIjoiYjhlZDhkNjItZjM1OC00ODgwLThhM2EtMzk5YzFkMWFiNTc5IiwiZnVsbE5hbWUiOiJMdWlzIEFybWFuZG8gU2lsdmEgQmFsbGFkYXJlcyAiLCJlbWFpbCI6Imx1aXNhcm1hbmRvYmFsbGFkYXJlc0BnbWFpbC5jb20iLCJpYXQiOjE3MDEyNzc1NTd9.PgtxqtdQYPsA-DQQRH5CHc3AcjJ1IQos6k0yqGIxS8s';
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
