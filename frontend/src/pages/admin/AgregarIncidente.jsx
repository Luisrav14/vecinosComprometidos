import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { ToastContainer, toast } from 'react-toastify';
import { inputRequiredToast,inputMaxlengthToast } from "../../components/ui/toast/ToastValidation";
import 'react-toastify/dist/ReactToastify.css';


export const AgregarIncidente = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <ToastContainer/>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar Incidente</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-12 mb-3">
                <label className="form-label">Motivo</label>
                <input
                  type="Motivo"
                  className="form-control"
                  {...register("motivo", {
                    required: true,
                  })}
                  placeholder="Motivo"
                />
                  {errors.motivo?.type === "required" && inputRequiredToast()}
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
                />
                 {errors.descripción?.type === "required" && inputRequiredToast()}
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
