import { ApolloProvider } from "@apollo/client";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProvideAuth } from "./hooks/auth/use-auth-hook";
import "./index.css";
import apolloClient from "./shared/apollo/apollo.provider";
import { ProvideModalContext } from "./contexts/modal-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProvideAuth>
          <ProvideModalContext>
            <App />
          </ProvideModalContext>
        </ProvideAuth>
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>
);
