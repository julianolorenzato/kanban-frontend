import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="h-[calc(100%-3rem)] flex flex-col sm:flex-row grow">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
