import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const AccionesMod = () => {
  const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
  };

  const columns = [
    {
      id: "id",
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      id: "Estatus",
      name: "Estatus",
      selector: (row) => row.estatus,
      sortable: true,
      center: true,
      width: "30%",
    },
    {
      id: "Titulo",
      name: "Titulo",
      selector: (row) => row.titulo,
      sortable: true,
      center: true,
      width: "10%",
    },
    
    {
      id: "Descripcion",
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      id: "Soluciones",
      name: "Soluciones",
      selector: (row) => row.soluciones,
      center: true,
     
    },
    {
      id: "Resultado",
      name: "Resultado",
      selector: (row) => row.resultado,
      center: true,
     
    },
    {
      id: "Imagen",
      name: "Imagen",
      selector: (row) => row.imagen,
      center: true,
     
    },
  ];

  const data = [
    {
      id: 1,
      titulo: "arreglo",
      estatus:"pendiente",
      descripcion: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      soluciones: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      resultado: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      imagen: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillFileEarmarkFill />
        </button>,
      ],
     

    }
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Acciones</h1>
      <h6>Esta sección es de suma importancia para dar a conocer a todos los residentes acciones que se han emprendido para mejorar su calidad de vida. Desde acciones de mantenimiento hasta actividades financieras e implementación de nuevas metodologías esta sección conectará de forma importante a mesa directiva con residentes optimizando tiempos y procesos.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Asambleas </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-anuncios" className="btn btn-primary">
                <BsPlusLg /> 
              </Link>
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
