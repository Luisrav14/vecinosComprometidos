import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { BsPlusLg } from "react-icons/bs";
export const AgregarEncuesta = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Crear Encuesta</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nombre de la encuesta</label>
                <input
                  type="Titulo"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Titulo"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de finalizacion</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_finalizacion", {
                    required: true,
                  })}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  type="text"
                  rows={3}
                  className="form-control"
                  {...register("descripción", {
                    required: true,
                  })}
                  placeholder="Descripción"
                />
              </div>

              <div className="col-md-4 my-5">
                <button type="" className="btn btn-primary form-control">
                  <BsPlusLg /> Agregar pregunta
                </button>
                <div className="mb-4"> </div>
                <button type="submit" className="btn btn-primary form-control">
                  <FaRegSave /> Crear encuesta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
