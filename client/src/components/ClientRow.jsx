import { FaTrash } from 'react-icons/fa'

const ClientRow = ({ client}) => {
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.lastName}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{client.state}</td>
        <td>{client.country}</td>
        <td>
            <button className="btn btn-danger btn-sm">
                <FaTrash/>
            </button>
        </td>
    </tr>
  )
}

export default ClientRow