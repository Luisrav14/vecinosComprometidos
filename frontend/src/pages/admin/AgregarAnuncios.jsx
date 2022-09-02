import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { inputMaxLength30Toast, inputRequiredToast } from "../../components/ui/toast/inputRequiredToast";

export const AgregarAnuncios = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2"> Agregar accion</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de inicio</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_inicio", {
                    required: true,
                  })}
                />
                  {errors.fecha_inicio?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de conclusion</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_conclu", {
                    required: true,
                  })}
                />
                 {errors.fecha_conclu?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Titulo"
                />
                 {errors.titulo?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("descripcion", {
                    required: true,
                  })}
                  placeholder="Descripcion"
                />
                 {errors.descripcion?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Soluciones</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("soluciones", {
                    required: true,
                  })}
                  placeholder="Soluciones"
                />
                {errors.soluciones?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Estatus</label>
                <select
                className="form-select"
                 {...register("estatus",{
                  required: true,
                 }
                )}
                 
                aria-label="Default select example">
                  <option selected>Selecciona una opcion</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                
               
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Resultados</label>
                <input
                  type="Resultados"
                  className="form-control"
                  {...register("resultados", {
                    required: true,
                  })}
                  placeholder="Resultados"
                />
                 {errors.resultados?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label" hidden>
                  oculto
                </label>
                <input
                  hidden
                  type="oculto"
                  className="form-control"
                  {...register("oculto", {
                  
                  })}
                  placeholder="oculto"
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
