import React from "react";
import GlobalStyles from "./styles/global";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:4321/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
