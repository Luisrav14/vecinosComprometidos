import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Reglamentos = () => {
 

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
    
      name: "Titulo",
      selector: (row) => row.titulo,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Motivo",
      selector: (row) => row.motivo,
      center: true,
     
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      center: true,
     
    },
    {
      name: "Documento",
      selector: (row) => row.documento,
      center: true,
     
    },
   
 
    {
    
      name: "Fecha",
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
      titulo:"Nuevo Reglamento	",
      motivo: "Falta de norma anterior",
      fecha: "2021-10-27",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      documento: [
        
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
      <h1 className="mb-3 fw-bold">Reglamentos</h1>
      <h6>En esta sección encontramos los reglamentos relativos a la sana convivencia entre colonos, podemos añadir y editar estos reglamentos, aquí mantendremos un registro de los mismos.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Recursos humanos </h5>
            <div className="col-md-6 text-right">
            <Link to="/admin/agregar-reglamentos" className="btn btn-primary">
                <BsPlusLg/>  Agregar
              </Link>
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
