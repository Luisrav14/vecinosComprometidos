import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/RegresarBtn";

export const AgregarInformeFinanciero = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar informe financiero</h5>
            <div className="col-md-6 text-right">

              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">




             
              <div className="col-md-6 mb-3">
                <label className="form-label">Titulo del informe</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                  })}
                  placeholder="Titulo"
                />
              </div>
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Motivo del informe</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("motivo", {
                    required: true,
                  })}
                  placeholder="Titulo"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Descripcion</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripción", {
                    required: true,
                  })}
                  placeholder="Descripción"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Archivo PDF</label>
                <input class="form-control" id="formFileLg" type="file"/>
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
