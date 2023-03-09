import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';


const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
});


const apolloClient = new ApolloClient({
  link: from([ httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
