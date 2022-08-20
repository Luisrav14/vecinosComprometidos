import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Asamblea = () => {
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
      width: "5%",
      center: true,
    },
    {
      id: "Fecha",
      name: "Fecha",
      selector: (row) => row.fecha,
      sortable: true,
      center: true,
      width: "12%",
    },
    {
      id: "Titulo",
      name: "Titulo",
      selector: (row) => row.titulo,
      sortable: true,
      center: true,
      width: "53%",
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
      id: "Fecha Publicado",
      name: "Fecha Publicado",
      selector: (row) => row.fechapublicado,
      center: true,
      width: "15%",
    },
  ];

  const data = [
    {
      id: 1,
      fecha: "2022-07-13",
      titulo: "PRIMERA ASAMBLEA EXTRAORDINARIA 2022",
      descripcion: [
        
        <button className="btn btn-primary mx-2" onClick={sendEmail}>
          <BsFillChatLeftTextFill />
        </button>,
      ],
      fechapublicado:"2022-07-13",
    },
    {
      id: 2,
      fecha: "2022-07-13",
      titulo: "PRIMERA ASAMBLEA EXTRAORDINARIA 2022",
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
      <h1 className="mb-3 fw-bold">Asamblea</h1>
      <h6>En esta sección podemos encontrar información acerca de convocatorias a eventos que se han realizado con los colonos, como juntas o asambleas, nos resulta útil si queremos mantener un registro y consistencia en la comunicación con los colonos.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Asambleas </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-propietario" className="btn btn-primary">
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
