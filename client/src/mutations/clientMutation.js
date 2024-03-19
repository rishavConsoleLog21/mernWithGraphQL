import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      lastName
      email
      phone
      state
      country
    }
  }
`;

export { DELETE_CLIENT };
