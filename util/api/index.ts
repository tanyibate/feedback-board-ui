import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import config from "../../config";

const client = new ApolloClient({
  uri: config.graphqlServerUrl,
  cache: new InMemoryCache(),
});

export default client;
