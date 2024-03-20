import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const ADD_CLIENT = gql`
  mutation addClient(
    $name: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $state: String!
    $country: String!
  ) {
    addClient(
      name: $name
      lastName: $lastName
      email: $email
      phone: $phone
      state: $state
      country: $country
    ) {
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

export { DELETE_CLIENT, ADD_CLIENT };
