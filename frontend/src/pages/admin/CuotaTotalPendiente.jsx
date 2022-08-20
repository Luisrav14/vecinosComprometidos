import { NavLink } from "react-router-dom";
import { BsFileEarmarkExcel, BsFileEarmarkPdf, BsSearch, BsTable } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { exportPDF } from "../../components/admin/datatable/ExportPDF";
import { RegresarBtn } from "../../components/RegresarBtn";

export const CuotaTotalPendiente = () => {
  const columns = [
    {
      name: "Unidad",
      selector: (row) => row.Unidad,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.Nombre,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Método de pago",
      selector: (row) => row.metodo_pago,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Cuota Mantenimiento",
      selector: (row) => row.cuota_mantenimiento,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Cuota Recaudar",
      selector: (row) => row.cuota_recaudar,
      center: true,
      width: "auto",
    },
  ];

  const data = [
    {
      id: 1,
      Unidad: "12-Aza-106-148",
      Nombre: "Prueba Uno",
      metodo_pago: "Efectivo",
      cuota_mantenimiento: "$826.35",
      cuota_recaudar: "$682.57",
    },
    {
      id: 2,
      Unidad: "18-Azu-106-203",
      Nombre: "Prueba",
      metodo_pago: "Suscripción",
      cuota_mantenimiento: "$440.00",
      cuota_recaudar: "$363.44",
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Total Pendiente</h1>

      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-md-6 pt-2">Cuotas pendientes del mes de :mes</h5>
            <div className="col-md-2 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="col-md-12 d-flex mb-3 justify-content-start">
            <input type="text" className="form-control col-md-3" placeholder="Buscar..." />
            <button className="btn btn-primary mx-2" onClick={() => exportPDF()}>
              <BsFileEarmarkPdf /> PDF
            </button>
            <button className="btn btn-primary mx-2">
              <BsFileEarmarkExcel /> Excel
            </button>
          </div>
          <div className="col-md-12">
            <DataTableComponent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
