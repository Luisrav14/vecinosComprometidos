import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Proveedores = () => {
 

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
      name: "RFC",
      selector: (row) => row.rfc,
      center: true,
     
    },
    {
    
      name: "Nombre Contacto",
      selector: (row) => row.nombrecontacto,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Correo contacto",
      selector: (row) => row.correocontacto,
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
      nombre:"Sujeto Prueba	",
      rfc: "0123456789ABC",
      nombrecontacto: "Prueba",
      correocontacto:"ernestoar2301@gmail.com",
     

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
      <h1 className="mb-3 fw-bold">Proveedores</h1>
      <h6>En esta página encontramos una lista de proveedores de nuestro fraccionamiento, estos pueden incluir personal de ventas, personal de suministro, entre otros. Podemos ver su Nombre, RFC, nombre de la persona con la que contactaremos y correo de contacto, además podemos actualizar o agregar más información.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Proveedores </h5>
            <div className="col-md-6 text-right">
            <Link to="/admin/agregar-proveedores" className="btn btn-primary">
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
