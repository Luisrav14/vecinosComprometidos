import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";

export const AgregarAsamblea = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar asamblea</h5>
            <div className="col-md-6 text-right">
              <Link to="/admin/general" className="btn btn-primary">
                <FaArrowLeft /> Regresar
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
             
              
              
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de la asamblea</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_asamblea", {
                    required: true,
                  })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Titulo</label>
                <input
                  type="Titulo"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Correo"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Descripcion</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripcion", {
                    required: true,
                  })}
                  placeholder="Descripcion"
                />
              </div>
             

             
              
              
              <div className="col-md-4 my-5">
                <button type="submit" className="btn btn-primary form-control">
                  <FaRegSave /> Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
