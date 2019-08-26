import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { GraphQLInt, GraphQLString } from "graphql/type/scalars";
import { UserType } from "../type/index";

import { User } from "../../../types";

import axios from "axios";

const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString }
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      const result = await axios.get(`http://localhost:5000/users/${name}`);
      return result.data;
    }
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context, info) {
      const result = await axios.get("http://localhost:5000/users");
      return result.data;
    }
  }
};

export { UserQuery };
