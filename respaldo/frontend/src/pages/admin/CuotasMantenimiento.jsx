import { NavLink } from "react-router-dom";
import { DataTableComponent, FiltersMonthYear } from "../../components/";

export const CuotasMantenimiento = () => {
  const columns = [
    {
      name: "Año",
      selector: (row) => row.año,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
      name: "Mes",
      selector: (row) => row.mes,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Total Cuotas de mantenimiento",
      selector: (row) => row.total_cuotas,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Pendiente",
      selector: (row) => row.pendiente,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Total Pagado",
      selector: (row) => row.pagado,
      center: true,
      width: "auto",
    },
    {
      name: "Estatus",
      selector: (row) => row.estatus,
      center: true,
      width: "auto",
    },
  ];

  const data = [
    {
      id: 1,
      año: "2022",
      mes: "Agosto",
      total_cuotas: (
        <NavLink to="recaudar" className="text-decoration-none">
          $116,000.00
        </NavLink>
      ),
      pendiente: (
        <NavLink to="pendiente" className="text-decoration-none">
          $0.00
        </NavLink>
      ),
      pagado: (
        <NavLink to="pagado" className="text-decoration-none">
          $116,000.00
        </NavLink>
      ),
      estatus: <span className="badge badge-success">Pagado</span>,
    },
    {
      id: 2,
      año: "2022",
      mes: "Julio",
      total_cuotas: (
        <NavLink to="recaudar" className="text-decoration-none">
          $116,000.00
        </NavLink>
      ),
      pendiente: (
        <NavLink to="pendiente" className="text-decoration-none">
          $60,505.00
        </NavLink>
      ),
      pagado: (
        <NavLink to="pagado" className="text-decoration-none">
          $55,495.00
        </NavLink>
      ),
      estatus: <span className="badge badge-danger">Pendiente</span>,
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Cuotas Mantenimiento</h1>

      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Total de cuotas de mantenimiento mensual</h5>
          </div>
        </div>
        <div className="card-body">
          <FiltersMonthYear />
          <div className="col-md-12">
            <DataTableComponent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
