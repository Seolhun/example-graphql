import React from "react";

import { useQuery } from "@apollo/react-hooks";

import UsersQuery from "./graphql/query/UsersQuery";

import "./App.css";

const tables = ["id", "email", "name", "birth"];

const App: React.FC = () => {
  const { loading, error, data } = useQuery(UsersQuery.USERS);

  console.error("@@@", { loading, error, data });
  return (
    <div className="App">
      <table>
        <thead>
          {tables.map(key => (
            <th key={key}>{key}</th>
          ))}
        </thead>
        {!loading && (
          <tbody>
            {data.users.map((user: any) => (
              <tr key={user.id}>
                {tables.map(key => (
                  <td key={user[key]}>{user[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default App;
