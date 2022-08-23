import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Inventario = () => {
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
      id: "Categoria",
      name: "Categoria",
      selector: (row) => row.categoria,
      sortable: true,
      center: true,
     
    },
    {
      id: "Articulo",
      name: "Articulo",
      selector: (row) => row.articulo,
      sortable: true,
      center: true,
      width: "10%",
    
    },
    {
      id: "Ubicacion",
      name: "Ubicacion",
      selector: (row) => row.ubicacion,
      sortable: true,
      center: true,
      
    },
    {
      id: "Descripcion",
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
      center: true,
      width: "12%",
     
    },
    {
      id: "Fecha adquisicion",
      name: "Fecha adquisicion",
      selector: (row) => row.fechaadqui,
      center: true,
     
    },
    {
      id: "Remplazos",
      name: "Remplazos",
      selector: (row) => row.remplazos,
      center: true,
      width: "10%",
     
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
      categoria: "Acceso",
      articulo:"Tarjeta",
      ubicacion:"Bodega",
      descripcion: [
        
        <button className="btn btn-primary mx-2" >
          <BsFillChatLeftTextFill />
        </button>,
      ],
      fechaadqui:"23/08/2022",
      remplazos:"Si",
      acciones: [
        
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-danger mx-2" onClick={Borrar}>
        <AiFillDelete />
      </button>,
      ],
   
     

    }
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Inventario categoria </h1>
      <h6>En esta seccion podras encontrar el inventario de la categoria</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Inventario </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-inventario" className="btn btn-primary">
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
