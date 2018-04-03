import { GraphQLSchema, printSchema } from 'graphql';
import { mutation } from '../mutation';
import { query } from '../query';

function getSchemaString() {
  console.log(printSchema(schema));
}

const schema = new GraphQLSchema({
  query,
  mutation,
});

export { schema, getSchemaString };
