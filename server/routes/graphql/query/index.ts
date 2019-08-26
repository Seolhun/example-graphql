import { GraphQLObjectType } from 'graphql';

import { UserQuery } from './UserQuery';

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...UserQuery,
  },
});

export { query };
