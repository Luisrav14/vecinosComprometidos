import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const RecursosHumanos = () => {
 

  const columns = [
    {
      id: "#",
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
    
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Contacto",
      selector: (row) => row.contacto,
      center: true,
     
    },
    {
      name: "Contrato",
      selector: (row) => row.contrato,
      center: true,
     
    },
   
 
    {
    
      name: "Fecha Ingreso",
      selector: (row) => row.fecha,
      center: true,
     
    },
   
   
    {
     
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
    },
    
  ];

  const data = [
    {
      id: 1,
      nombre:"Ernesto",
      motivo: "informe financiero",
      fecha: "2021-10-27",
      contacto:"ernestoar2301@gmail.com",
      contrato: [
        
        <button className="btn btn-primary mx-2" >
          <AiFillFile />
        </button>,
      ],

      acciones: [
        <button className="btn btn-success mx-2">
          <BsPencilSquare />
        </button>,
         <button className="btn btn-danger mx-2">
         <AiFillDelete />
       </button>,
      ],
      
    },
  
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Recursos Humanos</h1>
      <h6>En esta página podemos acceder a una lista de personal de Recursos Humanos de nuestro fraccionamiento y documentación relevante en caso de requerirla, Además podemos actualizar, borrar y añadir información del personal .</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Recursos humanos </h5>
            <div className="col-md-6 text-right">
            <Link to="/admin/agregar-recursos-humanos" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </Link>
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
