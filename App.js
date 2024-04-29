import { ApolloProvider } from "@apollo/client";
import Router from "./src/Navigation/Router";
import { NativeBaseProvider } from "native-base";
import client from "./src/Apollo";

export default function App() {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  );
}
