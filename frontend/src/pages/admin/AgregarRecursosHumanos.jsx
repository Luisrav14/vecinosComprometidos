import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { ToastContainer, toast } from 'react-toastify';
import { inputRequiredToast,inputMaxlengthToast } from "../../components/ui/toast/ToastValidation";
import 'react-toastify/dist/ReactToastify.css';


export const AgregarRecursosHumanos = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <ToastContainer/>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar contrato</h5>
            <div className="col-md-6 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              <div className="col-md-12s mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre"
                />
                  {errors.nombre?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Apellido Paterno</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("apellido_p", {
                    required: true,
                  })}
                  placeholder="Apellido Paterno"
                />
                {errors.apellido_p?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Apellido Materno</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("apellido_m", {
                    required: true,
                  })}
                  placeholder="Apellido Materno"
                />
                 {errors.apellido_m?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Fraccionamiento</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("fraccionamiento", {
                    required: true,
                  })}
                  placeholder="Fraccionamiento"
                />
                {errors.fraccionamiento?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Calle</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Calle", {
                    required: true,
                  })}
                  placeholder="Calle"
                />
                {errors.Calle?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Num ext</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("numext", {
                    required: true,
                  })}
                  placeholder="Num ext"
                />
                {errors.numext?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("telefono", {
                    required: true,
                  })}
                  placeholder="Telefono"
                />
                 {errors.telefono?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("correo", {
                    required: true,
                  })}
                  placeholder="Correo"
                />
                 {errors.correo?.type === "required" && inputRequiredToast()}
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Contrato en archivo PDF</label>
                <input class="form-control" id="formFileLg" type="file" />
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
