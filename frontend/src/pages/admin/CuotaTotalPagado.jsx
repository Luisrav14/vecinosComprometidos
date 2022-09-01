import { NavLink } from "react-router-dom";
import { BsEnvelope, BsFileEarmarkExcel, BsFileEarmarkPdf, BsFillTrashFill, BsPencilSquare, BsSearch, BsTable } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { exportPDF } from "../../components/admin/datatable/ExportPDF";
import { RegresarBtn } from "../../components/ui/RegresarBtn";

export const CuotaTotalPagado = () => {
  const columns = [
    {
      name: "Folio",
      selector: (row) => row.folio,
      sortable: true,
      width: "10%",
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
    {
      name: "Cuota recaudar",
      selector: (row) => row.cuota_recaudar,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      width: "auto",
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      folio: "0001",
      nombre: "Prueba Numero Uno",
      metodo_pago: "Efectivo",
      cuota_mantenimiento: "$526.00",
      cuota_recaudar: "$490.00",
      acciones: [
        <button className="btn btn-primary mx-1">
          <BsFileEarmarkPdf />
        </button>,
        <button className="btn btn-primary mx-1">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger mx-1">
          <BsFillTrashFill />
        </button>,
      ],
    },
    {
      id: 2,
      folio: "0002",
      nombre: "Prueba Numero Dos",
      metodo_pago: "Transferencia",
      cuota_mantenimiento: "$526.00",
      cuota_recaudar: "$490.00",
      acciones: [
        <button className="btn btn-primary mx-1">
          <BsFileEarmarkPdf />
        </button>,
        <button className="btn btn-primary mx-1">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger mx-1">
          <BsFillTrashFill />
        </button>,
      ],
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Total Pagado</h1>

      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-md-6 pt-2">Total pagado del mes de :mes</h5>
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
