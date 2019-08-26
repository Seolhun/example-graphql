import { GraphQLFieldConfigMap, GraphQLNonNull } from "graphql";
import { GraphQLInt, GraphQLString } from "graphql/type/scalars";
import { UserType } from "../type/index";

import { User } from "../../../types";

import axios from "axios";

const UserMutation: GraphQLFieldConfigMap<any, any> = {
  // Basic
  addUser: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(parent, { email, name, birth }: User, context, info) {
      const result = await axios.post("http://localhost:5000/users", {
        email,
        name,
        birth
      } as User);
      return result.data;
    }
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      birth: { type: GraphQLString }
    },
    async resolve(parent, { id, email, name, birth }: User, context, info) {
      const result = await axios.patch(`http://localhost:5000/users/${id}`, {
        email,
        name,
        birth
      } as User);
      return result.data;
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString }
    },
    async resolve(parent, { id, email }: User, context, info) {
      const result = await axios.delete(`http://localhost:5000/${id}`);
      return result.data;
    }
  }
};

export { UserMutation };
