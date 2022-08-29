import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const AreasReservadas = () => {
 

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
    
      name: "Fecha de reservacion",
      selector: (row) => row.fecha,
      center: true,
     
    },
    {
    
      name: "Propietario",
      selector: (row) => row.propietario,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Evento",
      selector: (row) => row.evento,
      center: true,
     
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      center: true,
     
    },
    {
     
      name: "Area reservada",
      selector: (row) => row.area,
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
      propietario:"Manuel Rivera.",
      evento: "fiesta",
      fecha: "19 de agosto 2022 15:34 - 15:34",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      area:"patio",
      acciones: [
        
        <button className="btn btn-primary mx-2" >
          <AiFillFile />
        </button>,
      ],

    
      
      
    }
   
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Areás Reservadas</h1>
      <h6>En esta tabla vemos los eventos que han sido reservados por los colonos, podemos ver por quien estas áreas serán ocupadas junto con el dia del evento, para su conveniencia puede descargar la lista en formato PDF o visualizarlo en línea.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Areás Reservadas</h5>
           
            <div className="col-md-6 text-right">
            
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}   />
      </div>
    </>
  );
};
