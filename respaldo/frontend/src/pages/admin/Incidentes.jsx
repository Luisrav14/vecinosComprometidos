import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Incidentes = () => {
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
      width: "7%",
      center: true,
    },
    {
      id: "Motivo",
      name: "Motivo",
      selector: (row) => row.motivo,
      sortable: true,
      center: true,
      width: "40%",
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
      id: "Fecha ",
      name: "Fecha ",
      selector: (row) => row.fecha,
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
      motivo:"Daño a la estructura de pavimento en calle bugambilias	",
      fecha: "2021-10-27",
      titulo: "PRIMERA ASAMBLEA EXTRAORDINARIA 2022",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      acciones: [
        <button className="btn btn-success mx-2">
          <BsPencilSquare />
        </button>,
         <button className="btn btn-danger mx-2" onClick={sendEmail}>
         <AiFillDelete />
       </button>,
      ],
      
    },
    {
      id: 2,
      motivo:"Av. Las Quintas esquina con Magnolias	",
      fecha: "2021-10-27",
      titulo: "PRIMERA ASAMBLEA EXTRAORDINARIA 2022",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      acciones: [
        <button className="btn btn-success mx-2">
          <BsPencilSquare />
        </button>,
         <button className="btn btn-danger mx-2" >
         <AiFillDelete />
       </button>,
      ],
     
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Incidentes</h1>
      <h6>Aquí se muestra una lista de eventos notorios que sucedieron en el día a día en el fraccionamiento, podremos agregar y actualizarlos a nuestra conveniencia, o eliminarlos.

</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Incidentes </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregarincidente" className="btn btn-primary">
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
