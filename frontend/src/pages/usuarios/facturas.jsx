import React from "react";


import Swal from "sweetalert2";

import DataTable from "react-data-table-component";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsPinAngle,BsFillFileEarmarkFill } from "react-icons/bs";
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
    width: "8%",
    center: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
    sortable: true,
    
    center: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
    width: "10%",
    center: true,
  },
  {
    name: "Concepto",
    selector: (row) => row.direccion,
    sortable: true,
    center: true,
  },
  {
    name: "Recibo",
    selector: (row) => row.recibo,
    sortable: true,
    center: true,
  },
  {
    name: "Archivo xml",
    selector: (row) => row.xml,
    sortable: true,
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
    fecha:"18/07/22",
    nombre: "Factura Numero 1",
    direccion: "Quintas #112",
    recibo: [
      <button class="btn btn-warning mx-2">
        <BsFillFileEarmarkFill />
      </button>,
         ],
         xml: [
          <button class="btn btn-warning mx-2">
            <BsFillFileEarmarkFill />
          </button>,
             ],
             acciones: [
              <button class="btn btn-success mx-2" onClick={sendEmail}>
                <BsEnvelope />
                </button>,
                 ],
  },
  {
    id: 2,
    fecha:"18/08/22",
    nombre: "Factura Numero dos",
    direccion: "Roble #333",
    recibo: [
      <button class="btn btn-warning mx-2">
        <BsFillFileEarmarkFill />
      </button>,
         ],
         xml: [
          <button class="btn btn-warning mx-2">
            <BsFillFileEarmarkFill />
          </button>,
             ],
             acciones: [
              <button class="btn btn-success mx-2" onClick={sendEmail}>
                <BsEnvelope />
                </button>,
                 ],
  },
];


export const Facturas = () => {
  return (
    <>
      <div className="col-12">
      <h1>
            <b>Facturas</b>
          </h1>
          <h5>En esta página veremos las facturas que se han generado.</h5>
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
