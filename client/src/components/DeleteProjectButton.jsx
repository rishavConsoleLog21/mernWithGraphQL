import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECT } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutaion";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    update(cache) {
      cache.modify({
        fields: {
          projects(existingProjects = [], { readField }) {
            return existingProjects.filter(
              (projectRef) => projectId !== readField("id", projectRef)
            );
          },
        },
      });
    },
    onCompleted: () => {
      navigate("/");
    },
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger btn-sm m-2" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
