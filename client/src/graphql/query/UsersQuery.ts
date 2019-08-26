import { gql } from "apollo-boost";

export default {
  USERS: gql`
    {
      users {
        id
        email
        name
        birth
      }
    }
  `
};
