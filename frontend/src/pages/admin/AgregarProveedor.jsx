import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { ToastContainer, toast } from 'react-toastify';
import { inputRequiredToast,inputMaxlengthToast } from "../../components/ui/toast/ToastValidation";
import 'react-toastify/dist/ReactToastify.css';

export const AgregarProveedor = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
    <ToastContainer/>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar Proveedor</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nombre o razón social</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre o razón social"
                />
                  {errors.nombre?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">RFC</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("rfcorfc", {
                    required: true,
                  })}
                  placeholder="RFC"
                  
                /> 
                {errors.rfcorfc?.type === "required" && inputRequiredToast()}
               
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Nombre de contacto</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nomcontacto", {
                    required: true,
                  })}
                  placeholder="Nombre de contacto"
                />
                {errors.nomcontacto?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Correo de contacto</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("correo", {
                    required: true,
                  })}
                  placeholder="Correo de contacto"
                />
                {errors.correo?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("teléfono", {
                    required: true,
                  })}
                  placeholder="Teléfono"
                />
                  {errors.teléfono?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Notas (opcional)</label>
                <textarea
                  type="text"
                  rows={3}
                  className="form-control"
                  {...register("notas", {
                    required: true,
                  })}
                  placeholder="Notas"
                />
                 {errors.notas?.type === "required" && inputRequiredToast()}
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
