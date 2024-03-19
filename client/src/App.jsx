import Header from "./components/Header";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Client from "./components/Client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
