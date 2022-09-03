import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { ToastContainer, toast } from 'react-toastify';
import { inputRequiredToast,inputMaxlengthToast } from "../../components/ui/toast/ToastValidation";
import 'react-toastify/dist/ReactToastify.css';

export const AgregarConvenio = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <ToastContainer/>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar convenios</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nombre del colono</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Selecciona un colono</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Descripcion</label>
                <input
                  type="Descripcion"
                  className="form-control"
                  {...register("descripcion", {
                    required: true,
                  })}
                  placeholder="Descripcion"
                />
                 {errors.descripcion?.type === "required" && inputRequiredToast()}
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Selecciona la fecha de finalizacion de convenio</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_final", {
                    required: true,
                  })}

                />
                {errors.fecha_final?.type === "required" && inputRequiredToast()}
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
