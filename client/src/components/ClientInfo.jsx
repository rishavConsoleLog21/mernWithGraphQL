import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          <strong>Name:</strong>
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          <strong>Email:</strong>
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          <strong>Phone:</strong>
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
