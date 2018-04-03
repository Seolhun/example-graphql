import express from 'express';
import graphqlHTTP from 'express-graphql';

import { schema, getSchemaString } from './routes/graphql/schema';

const app = express();
// GraphQL 
app.use('/graphql', graphqlHTTP(async (request) => {
  return {
    schema,
    graphiql: true, // GraphQL 쿼리를 테스트할 수 있는 Dev Tool입니다.
  };
}));

getSchemaString();

// Run Server
app.listen(7000, () => {
  console.log('=========================app.ts=====================');
  console.log('Listening the server 7000');
  console.log('====================================================');
}).on('error', (err) => {
  console.error(err);
});