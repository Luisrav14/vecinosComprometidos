import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const ReportesResueltos = () => {
  const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
  };

  const columns = [
    {
      folio: "Folio",
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
      id: "Nombre",
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      id: "Direccion",
      name: "Direccion",
      selector: (row) => row.direccion,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      id: "Consulta ",
      name: "Consulta",
      selector: (row) => row.consulta,
      center: true,
     
    },
    {
      id: "Fecha ",
      name: "Fecha ",
      selector: (row) => row.fecha,
      center: true,
     
    },
    {
      id: "Estatus",
      name: "Estatus",
      selector: (row) => row.estatus,
      center: true,
     
    },
   
    {
      id: "Acciones",
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
    },
    
  ];

  const data = [
    {
      id: 1,
      nombre:"Alicia Talamantes	",
      fecha: "2021-10-27",
      direccion: "Azaleas 108",
      consulta: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      estatus:"Resuelto",
      acciones: [
        <button className="btn btn-warning mx-2">
          <AiFillFile />
        </button>,
        
      ],
      
    },
    {
      id: 2,
      nombre:"Luisa Enriquez",
      fecha: "2021-10-27",
      direccion: "Orquidea 109",
      consulta: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      estatus:"Resuelto",
      acciones: [
        <button className="btn btn-warning mx-2">
          <AiFillFile />
        </button>,
        
      ],
      
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Reportes Resueltos</h1>
      <h6>En esta sección tenemos una lista de reportes a los que ya le dimos seguimiento, podemos consultar esta tabla amanera de historial, para su conveniencia puede descargar el reporte en formato PDF o visualizarlo en línea.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Reportes Resueltos </h5>
           
            <div className="col-md-6 text-right">
            
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
