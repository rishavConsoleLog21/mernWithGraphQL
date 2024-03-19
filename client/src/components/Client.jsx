import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";

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

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!!!</p>;

  return <>{!loading && !error && (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>State</th>
          <th>Country</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
      </tbody>
    </table>
  )}</>;
};

export default Client;
