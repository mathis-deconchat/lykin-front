import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  useCreateSpendingMutation,
  useGetAllSpendingsQuery,
} from "./generated/graphql-types";
import AppRouter from "./services/router";

function App() {
  return (
    <>
      <AppRouter />
      <div className="bg-gradient-to-t from-blue-200 via-gray-600 to-gray-900 min-h-screen min-w-screen ">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
