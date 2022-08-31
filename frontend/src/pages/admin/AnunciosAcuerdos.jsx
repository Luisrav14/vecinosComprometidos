import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const AnunciosAcuerdos = () => {
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
      id: "Titulo",
      name: "Titulo",
      selector: (row) => row.titulo,
      sortable: true,
      center: true,
      width: "30%",
    },
    {
      id: "Motivo",
      name: "Motivo",
      selector: (row) => row.motivo,
      sortable: true,
      center: true,
      width: "30%",
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
      id: "Documento",
      name: "Documento",
      selector: (row) => row.documento,
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
      titulo: "PRIMER ANUNCIO Y ACTA 2022",
      motivo:"DAR A CONOCER LA INFORMACION",
      descripcion: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      fechapublicado:"2022-07-13",
      documento: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillFileEarmarkFill />
        </button>,
      ],
      acciones: [
        <Link to="#" className="btn btn-warning mx-2">
          <BsPencilSquare />
        </Link>,
       <button className="btn btn-primary mx-2" onClick={sendEmail}>
       <BsFillFileEarmarkFill />
     </button>,
      ],

    }
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Anuncios</h1>
      <h6>Aquí podremos encontrar anuncios que se emitieron para convocar a la asamblea, así como el/los acuerdo(s) a los que se llegó durante la misma.</h6>
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
