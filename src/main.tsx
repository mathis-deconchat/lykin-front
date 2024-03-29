import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import apolloClient from "./shared/apollo/apollo.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>

      <App />
    </ApolloProvider>
  </React.StrictMode>
);
