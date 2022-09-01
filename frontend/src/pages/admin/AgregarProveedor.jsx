import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/ui/RegresarBtn";

export const AgregarProveedor = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
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
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">RFC</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("RFC", {
                    required: true,
                  })}
                  placeholder="RFC"
                />
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
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("Teléfono", {
                    required: true,
                  })}
                  placeholder="Teléfono"
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Notas (opcional)</label>
                <textarea
                  type="text"
                  rows={3}
                  className="form-control"
                  {...register("Notas", {
                    required: true,
                  })}
                  placeholder="Notas"
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
