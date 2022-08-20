import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";



const Pagar = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Pagado enviado exitosamente",
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
    name: "Concepto ",
    selector: (row) => row.concepto,
    sortable: true,
    
    center: true,
  },
  {
    name: "Descripcion ",
    selector: (row) => row.descripcion,
    sortable: true,
    
    center: true,
  },
  {
    name: "Monto",
    selector: (row) => row.monto,
    sortable: true,
    
    center: true,
  },
  {
    name: "Estatús",
    selector: (row) => row.estatus,
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
    concepto:"Ingreso Extraordinario al mes de: Marzo del 2022",
    descripcion: "cuota de mantenimiento febrero y marzo 2022",
    monto: "$1,029.00",
    estatus: "Pendiente",
    
             acciones: [
              <button class="btn btn-success mx-2" onClick={Pagar}>
               Pagar 
                </button>,
                 ],
  },
  {
    id: 2,
    concepto:"Ingreso Extraordinario al mes de: Marzo del 2022",
    descripcion: "cuota de mantenimiento febrero y marzo 2022",
    monto: "$1,029.00",
    estatus: "Pendiente",
             acciones: [
              <button class="btn btn-success mx-2" onClick={Pagar}>
                Pagar 
                </button>,
                 ],
  },
];
export const PagosPendientes = () => {
  return (
    <>
      <div className="col-12">
        <h1>
          <b>Pagos Extraordinarios</b>
        </h1>
        <h5>En esta página podemos ver una lista de los pagos que estan pendientes por pagar, haga clic en en boton "Pagar" para cumplir con su responsabilidad.</h5>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0"> </h5>

            <div className=" rounded col-xl-12 col-md-12">
              <div className="card-block mb-5 mt-5">
                <div className="text-center">
                  <div className="container mt-5">
                    <div>
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
