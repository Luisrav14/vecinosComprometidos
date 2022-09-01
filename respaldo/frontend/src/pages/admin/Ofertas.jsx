import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Ofertas = () => {
  const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
  };

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
    
      name: "Nombre de la empresa",
      selector: (row) => row.empresa,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
    
      name: "Categoria",
      selector: (row) => row.categoria,
      sortable: true,
      center: true,
      width: "15%",
    },
   
    {
     
      name: "Descripcion",
      selector: (row) => row.descripcion,
      center: true,
     
    },
    {
     
      name: "Servicios",
      selector: (row) => row.servicios,
      center: true,
     
    },
    {
     
      name: "Ofertas",
      selector: (row) => row.ofertas,
      center: true,
     
    },
    {
     
      name: "Contacto",
      selector: (row) => row.contacto,
      center: true,
     
    },
    {
     
      name: "Celular",
      selector: (row) => row.celular,
      center: true,
      width: "15%",
    },
    {
     
      name: "Imagen",
      selector: (row) => row.imagen,
      center: true,
     
    },
    {
     
      name: "Banner",
      selector: (row) => row.banner,
      center: true,
     
    },
   
    {
     
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
      width: "15%",
    },
    
  ];

  const data = [
    {
      id: 1,
      empresa:"manuel plomero	",
      categoria: "Plomeria",
      
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      servicios: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      ofertas: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      contacto: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      celular:"6181234567",
      imagen:"",
      banner:"",


    
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
         <button className="btn btn-danger mx-2" onClick={sendEmail}>
         <AiFillDelete />
       </button>,
      ],
      
    },
    
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Ofertas</h1>
      <h6>En esta seccion se es posible administrar las ofertas disponibles para los colonos, ofrecidas por distintas empresas.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Reportes pendientes </h5>
           
            <div className="col-md-6 text-right">
            <Link to="/admin/agregar-ofertas" className="btn btn-primary">
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
