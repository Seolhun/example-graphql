import { GraphQLObjectType } from 'graphql';

import { UserMutation } from './UserMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutation,
  },
});

export { mutation };
