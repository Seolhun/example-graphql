import { GraphQLList, GraphQLObjectType } from 'graphql';
import { GraphQLInt, GraphQLString } from 'graphql/type/scalars';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    birth: { type: GraphQLString },
  },
});

export { UserType };
