import { NavLink } from "react-router-dom";
import { BsFilePdf, BsPlusLg } from "react-icons/bs";

import { DataTableComponent, FiltersMonthYear } from "../../components";

export const EstadosDeCuenta = () => {
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
      name: "Banco",
      selector: (row) => row.banco,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Mes o periodo",
      selector: (row) => row.periodo,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Saldo Final",
      selector: (row) => row.saldo_final,
      center: true,
      width: "auto",
    },
    {
      name: "Archivo",
      selector: (row) => row.archivo,
      center: true,
      width: "auto",
    },
  ];

  const data = [
    {
      id: 1,
      año: "2022",
      mes: "Agosto",
      banco: "BBVA",
      periodo: "Agosto 2022",
      saldo_final: "$67,380.00",
      archivo: (
        <button class="btn btn-primary">
          <BsFilePdf />
        </button>
      ),
    },
    {
      id: 2,
      año: "2022",
      mes: "Julio",
      banco: "Santander",
      periodo: "Julio 2022",
      saldo_final: "$67,380.00",
      archivo: (
        <button class="btn btn-primary">
          <BsFilePdf />
        </button>
      ),
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Estados de cuenta</h1>

      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-md-6 pt-2">Información de estados de cuenta</h5>
            <div className="col-md-2 text-right">
              <button className="btn btn-primary">
                <BsPlusLg /> Agregar
              </button>
            </div>
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
