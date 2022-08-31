import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete, AiFillFile,AiFillFileImage } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const BlogDeNoticias = () => {


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
      name: "Descripcion",
      selector: (row) => row.descripcion,
      center: true,

    },
    {
      name: "Imagen",
      selector: (row) => row.imagen,
      center: true,

    },
    {
      name: "Estatus",
      selector: (row) => row.estatus,
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
      titulo: "Ejemplo 1",
      estatus: "activo",
      fecha: "2021-10-27",
    
      descripcion: [

        <button className="btn btn-primary mx-2" >
          <AiFillFile />
        </button>,
      ],
      imagen: [

        <button className="btn btn-primary mx-2" >
          <AiFillFileImage />
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
      <h1 className="mb-3 fw-bold">Blogs de noticias</h1>
      <h6>En esta sección podemos administrar las entradas a nuestro blog personal que se encuentra en la página web del fraccionamiento, podemos actualizarlas o borrarlas después de publicarlas en caso de que lo requiramos.

      </h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Recursos humanos </h5>
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-blog" className="btn btn-primary">
                <BsPlusLg />  Agregar
              </Link>
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={data} />
      </div>
    </>
  );
};
