import { NavLink } from "react-router-dom";
import { BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { exportPDF } from "../../components/admin/datatable/ExportPDF";
import { RegresarBtn } from "../../components/ui/RegresarBtn";

export const CuotaTotalRecaudar = () => {
  const columns = [
    {
      name: "Unidad",
      selector: (row) => row.unidad,
      sortable: true,
      width: "15%",
      center: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
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
      name: "Cuota de mantenimiento",
      selector: (row) => row.cuota_mantenimiento,
      sortable: true,
      width: "auto",
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      unidad: "001",
      nombre: "Prueba Numero Uno",
      metodo_pago: "Efectivo",
      cuota_mantenimiento: "$526.00",
    },
    {
      id: 2,
      unidad: "002",
      nombre: "Prueba Numero Dos",
      metodo_pago: "Transferencia",
      cuota_mantenimiento: "$526.00",
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Cuotas mantenimiento a recaudar</h1>

      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-md-6 pt-2">Desglose de cuotas de mantenimiento del mes de :mes</h5>
            <div className="col-md-2 text-right">
              <RegresarBtn />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="col-md-12">
            <DataTableComponent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
