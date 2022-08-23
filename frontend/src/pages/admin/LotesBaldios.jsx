import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const LotesBaldios = () => {
  const Borrar = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Se ha borrado exitosamente",
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
      id: "Clave de unidad",
      name: "Clave de unidad",
      selector: (row) => row.clave,
      sortable: true,
      center: true,
     
    },
    {
      id: "Propietario",
      name: "Propietario",
      selector: (row) => row.propietario,
      sortable: true,
      center: true,
     
    
    },
    {
      id: "Estatus",
      name: "Estatus",
      selector: (row) => row.estatus,
      sortable: true,
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
      clave: "1-Alc-103-008",
      propietario:"Alejandra Gómez Silerio",
      estatus:"Pendiente",
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,  
      ],
    },
    {
      id: 2,
      clave: "1-Alc-107-010",
      propietario:"Agustín García Ugalde",
      estatus:"Completado",
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,  
      ],
    }
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Cuentas con Lotes Baldios </h1>
      <h6>Es importante conocer nuestro fraccionamiento e identificar posibles focos de contaminacion o problemas, en esta pagina podemos ver una lista de los terrenos baldios de nuestro fraccionamiento</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Inventario </h5>
           
            <div className="col-md-6 text-right">
             
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data}  />
      </div>
    </>
  );
};
