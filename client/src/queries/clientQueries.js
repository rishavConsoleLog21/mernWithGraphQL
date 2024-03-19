import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
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

export { GET_CLIENTS };