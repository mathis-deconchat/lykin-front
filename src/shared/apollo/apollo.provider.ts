import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";



const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
  
});

const authLink = setContext((q, { headers }) => {
  return Auth.currentSession()
  .then((session: CognitoUserSession) => {
    const token = session.getIdToken().getJwtToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }).catch((err) => {
    console.log("err", err);
   
  })
});

const splitLink = split(
  ({ query }) => {
    console.log("query", query);
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  authLink.concat(httpLink),
);

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    
  })
});

export default apolloClient;
