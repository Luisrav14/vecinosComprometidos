import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/RegresarBtn";

export const AgregarMedidores = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar medidores</h5>
            <div className="col-md-6 text-right">

              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content d-flex">




             
              <div className="col-md-6 mb-3">
                <label className="form-label">Numero de medidor</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nummedidor", {
                    required: true,
                  })}
                  placeholder="Numero de medidor"
                />
              </div>
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Numero de servicio</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("numservi", {
                    required: true,
                  })}
                  placeholder="Numero de servicio"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Mes o periodo</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("mesperiodo", {
                    required: true,
                  })}
                  placeholder="Mes o periodo"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Selecciona la fecha de corte</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("fecha_asamblea", {
                    required: true,
                  })}
                />
              </div>
              



              <div className="col-6 mb-3">
                <label className="form-label">Saldo final</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("saldofinal", {
                    required: true,
                  })}
                  placeholder="Saldo final"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Archivo PDF</label>
                <input class="form-control" id="formFileLg" type="file"/>
              </div>
              



              <div className="row justify-content-center d-flex"> 
              <div className="col-md-4 my-5">
                <button type="submit" className="btn btn-primary form-control">
                  <FaRegSave /> Guardar
                </button>
              </div>
              </div>

             
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
