import React from "react";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

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
    width: "7%",
    center: true,
  },
  {
    name: "Estatus",
    selector: (row) => row.estatus,
    sortable: true,
    width: "10%",
    center: true,
  },
  {
    name: "Titulo de la actividad	",
    selector: (row) => row.titulo,
    sortable: true,
    width: "18%",
    center: true,
  },
  {
    name: "Descripción del Problema	",
    selector: (row) => row.descripcion,
    sortable: true,
    width: "20%",
    center: true,
  },
  {
    name: "Soluciones",
    selector: (row) => row.soluciones,
    sortable: true,
    center: true,
    width: "30%",
  },
  {
    name: "Resultados",
    selector: (row) => row.resultados,
    sortable: true,
    center: true,
    width: "20%",
  },
  {
    name: "Imagen",
    selector: (row) => row.imagen,
    center: true,
  },
];

const data = [
  {
    id: 1,
    estatus: "Completado",
    titulo: "Mejora de alumbrado",
    descripcion: "No prenden algunas lamparas",
    soluciones: "Cambiar las focos de las lamparas",
    resultados: "Se arreglaron los imperfectos",
    imagen: "no hay",
  },
];

export const Acciones = () => {
  return (
    <>
      <div className="col-12">
        <h1>
          <b>Acciones</b>
        </h1>
        <h5>Esta sección es de suma importancia para dar a conocer a todos los residentes acciones que se han emprendido para mejorar su calidad de vida. Desde acciones de mantenimiento hasta actividades financieras e implementación de nuevas metodologías esta sección conectará de forma importante a mesa directiva con residentes optimizando tiempos y procesos.</h5>
        <div className="card">
          <div className="card-header mb-0">
            <div className=" rounded col-xl-12 col-md-12">
              <div className="card-block mb-5 mt-3">
                <div className="text-center">
                  <div className="card-block ">
                    <div className="row d-flex justify-content-around">
                      <DataTableComponent columns={columns} data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body"></div>
        </div>
      </div>
      <div className="text-right">
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/openpay-logo.png" alt="" />
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/ssl.png" alt="" />
      </div>
    </>
  );
};
