import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { RegresarBtn } from "../../components/RegresarBtn";

export const AgregarOfertas = () => {
  const { register, handleSubmit } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar ofertas</h5>
            <div className="col-md-6 text-right">

              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content d-flex">


            <div className="col-md-6 mb-3">
                <label className="form-label">Nombre de la empresa</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre de la empresa"
                />
              </div>

           
              <div className="col-md-6 mb-3">
                <label className="form-label">categoria</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("categoria", {
                    required: true,
                  })}
                  placeholder="categoria"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripción", {
                    required: true,
                  })}
                  placeholder="Descripción"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Servicios</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("servicios", {
                    required: true,
                  })}
                  placeholder="Servicios"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Ofertas</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("ofertas", {
                    required: true,
                  })}
                  placeholder="Ofertas"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Contacto</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("contacto", {
                    required: true,
                  })}
                  placeholder="Contacto"
                />
              </div>
              

              <div className="col-6 mb-3">
                <label className="form-label">Imagen</label>
                <input class="form-control" id="formFileLg" type="file"/>
              </div>
              
              <div className="col-6 mb-3">
                <label className="form-label">Banner</label>
                <input class="form-control" id="formFileLg" type="file"/>
              </div>


              <div className="row justify-content-center d-flex"> 
              <div className="col-md-4 my-5">
                <button type="submit" className="btn btn-primary form-control">
                  <FaRegSave /> Guardar
                </button>
              </div>
              </div>






            





              <div className="col-md-4 my-5">
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
