import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";
import React from 'react';
import { RegresarBtn } from "../../components/ui/RegresarBtn";
import { ToastContainer, toast } from 'react-toastify';
import { inputRequiredToast,inputMaxlengthToast } from "../../components/ui/toast/ToastValidation";
import 'react-toastify/dist/ReactToastify.css';






export const AgregarAsamblea = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
  <ToastContainer/>
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
                  
                  {...register("fecha_asamblea",
                   {
                    required: true,
                    
                  })}
                  
                  
                />
                {errors.fecha_asamblea?.type === "required" && inputRequiredToast()  }
               
   
              </div>
              
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Titulo *</label>
                <input
                  type="Titulo"
                  className="form-control"
                  {...register("titulo", {
                    required: true,
                    maxLength: 30,
                  })}
                
                  placeholder="Titulo"
                />
                 
               {errors.titulo?.type === "required" && inputRequiredToast()  }
               {errors.titulo?.type === "maxLength" &&  inputMaxlengthToast()  }
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción *</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("descripcion", {
                    required: true,
                    maxLength: 200,
                    MessageEvent:"HOLA"
                  })}
                  placeholder="Descripción"
                  rows={5}
                />
                 {errors.descripcion?.type === "required" && inputRequiredToast()  }
              
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
