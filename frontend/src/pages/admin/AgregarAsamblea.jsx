import { useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { inputRequiredToast } from "../../components/ui/toast/inputRequiredToast";

export const AgregarAsamblea = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar asamblea</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de la asamblea *</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_asamblea", {
                    required: true,
                    maxLength: 10,
                  })}
                />
                {errors.fecha_asamblea?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Titulo</label>
                <input
                  type="Titulo"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Titulo"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripción", {
                    required: true,
                  })}
                  placeholder="Descripción"
                  rows={5}
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
