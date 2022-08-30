import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsFillEyeFill, BsFillPieChartFill,BsFillFileEarmarkFill } from "react-icons/bs";
import { BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const EncuestasAdm = () => {
  const sendEmail = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Email enviado exitosamente",
  });
};

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "8%",
    center: true,
  },
  {
    name: "Titulo",
    selector: (row) => row.titulo,
    sortable: true,
    
    center: true,
  },
  {
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
    width: "30%",
    center: true,
  },
  {
    name: "Fecha finalizacion",
    selector: (row) => row.fecha,
    sortable: true,
    center: true,
  },

  {
    name: "Acciones",
    selector: (row) => row.acciones,
    center: true,
    width: "25%",
  },
];

const data = [
  {
    id: 1,
    fecha:"18/07/22",
    titulo: "Encuesta Numero 1",
    descripcion: "Elegir color del alumbrado",
   
             acciones: [
             
                   <button class="btn btn-success mx-2"  title="Ver Resultados">
                   <BsFillEyeFill />
                   </button>,
                      <button class="btn btn-success mx-2"  title="Editar">
                      <BsPencilSquare />
                      </button>,
                        
                          <button className="btn btn-danger mx-2" onClick={sendEmail}>
                          <AiFillDelete />
                        </button>,
                 ],
  },
  {
    id: 2,
    fecha:"18/08/22",
    titulo: "Encuesta Numero 2",
    descripcion: "Elegir color de la entrada",
    
             acciones: [
              
                
              <button class="btn btn-success mx-2"  title="Ver Resultados">
              <BsFillEyeFill />
              </button>,
                      <button class="btn btn-success mx-2"  title="Editar">
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
      <h1 className="mb-3 fw-bold">Encuestas</h1>
      <h6>En esta sección podemos encontrar información acerca de las encuestas relevantes del fraccionamiento</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Encuestas </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-encuestas" className="btn btn-primary">
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
