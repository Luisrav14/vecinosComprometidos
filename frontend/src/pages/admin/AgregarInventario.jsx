import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave, FaBuilding } from "react-icons/fa";

import { LoaderBtn } from "../../components/ui/LoaderBtn";

export const AgregarInventario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar Inventario</h5>
            <div className="col-md-6 text-right">
              <Link to="/admin/general" className="btn btn-primary">
                <FaArrowLeft /> Regresar
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              {/* Datos del Propietario */}

              <div className="container mb-3">
                <div className="row">
                <div className="col-md-12 mb-3">
                    <label className="form-label">Categoria</label>
                    <select
                      className="form-select"
                      {...register("categoria", {
                        required: true,
                      })}
                    >
                      <option selected disabled>
                      Selecciona la categoria en la que desea registrar 
                      </option>
                      <option value="acceso">Accesos</option>
                      <option value="areas">Areas comunes</option>
                      <option value="temporada">Articulos de temporada</option>
                      <option value="transporte">Transporte</option>
                      <option value="vigilancia">Herramientas de vigilancia</option>
                      <option value="jardineria">Herramientas de jardinería</option>
                      <option value="administracion">Herramientas de administración</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Articulo *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("articulo", {
                        required: true,
                      })}
                      placeholder="Articulo"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Ubicacion *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("ubicacion", {
                        required: true,
                      })}
                      placeholder="Ubicacion"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Descripcion *</label>
                    <textarea
                      type="text"
                      className="form-control"
                      {...register("descripcion", {
                        required: true,
                      })}
                      placeholder="Descripcion "
                      rows={3}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de adquisicion</label>
                    <input type="date" className="form-control" {...register("fecha_adq")} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" >Remplazos</label>
                    <select  
                  
                      className="form-select"  style={{height: 38}}
                      {...register("remplazos", {
                        required: true,
                      })}
                    >
                      <option selected disabled>
                      Selecciona si el articulo tiene remplazos
                      </option>
                      <option value="si">Si</option>
                      <option value="no">No</option>
                    
                    </select>
                  </div>
                 
                 
                
                </div>
              </div>

             

              

              <div className="col-md-4 my-5">
                <LoaderBtn
                  typeBtn="submit"
                  textBtn={
                    <>
                      <FaRegSave /> Guardar
                    </>
                  }
                  isLoading={false}
                  loadText="Guardando..."
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
