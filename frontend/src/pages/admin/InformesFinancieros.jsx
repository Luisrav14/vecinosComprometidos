import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const InformesFinancieros = () => {
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
    
      name: "Colono",
      selector: (row) => row.colono,
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
    
      name: "Fecha inicio",
      selector: (row) => row.fechainicio,
      center: true,
     
    },
    {
    
      name: "Fecha final",
      selector: (row) => row.fechafinal,
      center: true,
     
    },
    {
     
      name: "Convenio",
      selector: (row) => row.convenio,
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
      colono:"Maura Isela Flores Murillo",
      fechainicio: "2021-10-27",
      fechafinal: "2021-10-27",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      convenio: [
        
        <button className="btn btn-primary mx-2" >
          <AiFillFile />
        </button>,
      ],

    
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
         <button className="btn btn-danger mx-2" onClick={sendEmail}>
         <AiFillDelete />
       </button>,
      ],
      
    },
    {
      id: 2,
      colono:"Luis Fernando Soto Jaquez	",
      fechainicio: "2021-10-27",
      fechafinal: "2021-10-27",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      convenio: [
        
        <button className="btn btn-primary mx-2" >
          <AiFillFile />
        </button>,
      ],

    
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
      <h1 className="mb-3 fw-bold">Informes Financieros</h1>
      <h6>En esta sección podemos consultar informes relacionado a la operación financiera del fraccionamiento, podremos agregar y descargar informes así como actualizarlos, para su conveniencia puede descargar el informe en formato PDF o visualizarlo en línea.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Reportes pendientes </h5>
           
            <div className="col-md-6 text-right">
            <Link to="/admin/agregarconvenios" className="btn btn-primary">
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
