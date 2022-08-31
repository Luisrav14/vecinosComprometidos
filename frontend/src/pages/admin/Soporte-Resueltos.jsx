import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const SoporteResueltos = () => {
  const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
  };

  const columns = [
    {
      id: "Folio",
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "8%",
      center: true,
    },
    {
      
      name: "Seccion",
      selector: (row) => row.seccion,
      sortable: true,
      
      center: true,
    },
    {
      
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
      center: true,
      
    },
    {
      
      name: "Fecha Reporte",
      selector: (row) => row.fecha,
      sortable: true,
      center: true,
      
    },
   
    {
      
      name: "Estatus",
      selector: (row) => row.estatus,
      sortable: true,
      center: true,
      
    },
    {
     
      name: "Atendio",
      selector: (row) => row.atendio,
      center: true,
     
    },
  ];

  const data = [
    {
      id: 1,
      seccion: "dashboard",
      fecha: "2022-07-13",
      estatus: "Resuelto",
      atendio: "Ernesto Rocha",
      descripcion: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      fechapublicado:"2022-07-13",
    },
   
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Soporte-Resueltos</h1>
      <h6>En esta sección tenemos una lista de los mensajes de soporte resueltos, aquí podemos ver un historial de los mismos, una descripción del problema.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Soporte-Resueltos </h5>
           
            <div className="col-md-6 text-right">
             
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
