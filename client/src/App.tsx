import React from "react";

import ApolloClient, { gql } from "apollo-boost";

import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql"
});

client
  .query({
    query: gql`
      {
        users
      }
    `
  })
  .then(result => console.log(result));

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
