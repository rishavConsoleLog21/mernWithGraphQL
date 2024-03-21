import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) {
    console.error(error);
    return <p>Something Went Wrong!!!</p>;
  }

  return <>{!loading && !error && (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
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
