import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";

export const AgregarSoportes = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2"> Agregar informacion a seccion soporte </h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Seccion en la que se genera el problema</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("seccion", {
                    required: true,
                  })}
                  placeholder="Seccion en la que se genera el problema"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Selecciona la persona que atendio:</label>
                <select class="form-select" aria-label="Default select example" required style={{ height: "56%" }}>
                  <option selected></option>
                  <option value="1">Ernesto Amaya</option>
                  <option value="2">Said Castañeda</option>
                  <option value="3">Luis Raul Valenzuela</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción del problema</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripción", {
                    required: true,
                  })}
                  placeholder="Descripción"
                />
              </div>

              <div className="row justify-content-center d-flex">
                <div className="col-md-4 my-5">
                  <button type="submit" className="btn btn-primary form-control">
                    <FaRegSave /> Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
