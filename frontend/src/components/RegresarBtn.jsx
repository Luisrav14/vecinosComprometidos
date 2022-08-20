import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const RegresarBtn = () => {
  const navigate = useNavigate();

  const lastPage = () => {
    navigate(-1);
  };

  return (
    <button className="btn btn-primary" onClick={lastPage}>
      <FaArrowLeft /> Regresar
    </button>
  );
};
