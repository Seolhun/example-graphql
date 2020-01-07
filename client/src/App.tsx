import React, { createRef } from "react";

import { useQuery } from "@apollo/react-hooks";

import UsersQuery from "./graphql/query/UsersQuery";
import FancyButton from "./components/button";

import "./App.css";

const keys = ["id", "email", "name", "birth"];

const App: React.FC = () => {
  const { loading, error, data } = useQuery(UsersQuery.USERS);
  const ref = createRef<HTMLButtonElement>();

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key}>{key}</th>
            ))}
            <th>Options</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {data.users.map((user: any) => (
              <tr key={user.id}>
                {keys.map(key => (
                  <td key={user[key]}>{user[key]}</td>
                ))}
                <td>
                  <FancyButton ref={ref}>Hello </FancyButton>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default App;
