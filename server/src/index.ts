import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";

import { schema, getSchemaString } from "./routes/graphql/schema";

const app = express();

// Cors
app.use(cors());

// GraphQL
app.use(
  "/graphql",
  graphqlHTTP(async request => ({
    schema,
    graphiql: true
  }))
);

getSchemaString();

// Run Server
app
  .listen(7000, () => {
    console.log("=========================app.ts=====================");
    console.log("Listening the server 7000");
    console.log("====================================================");
  })
  .on("error", err => {
    console.error(err);
  });
