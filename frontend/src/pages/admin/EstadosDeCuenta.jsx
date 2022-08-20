import { NavLink } from "react-router-dom";
import { BsFileEarmarkExcel, BsFileEarmarkPdf, BsFilePdf, BsPlusLg, BsSearch, BsTable } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { exportPDF } from "../../components/admin/datatable/ExportPDF";

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
          <div className="col-md-12 mb-3">
            <div className="d-flex px-5 justify-content-center">
              <form className="form-inline col-md-5 col-sm-12">
                <select className="form-control px-5 mr-3">
                  <option value="">Selecciona un año</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
                <button className="btn btn-primary my-sm-2 ">
                  <BsSearch /> Buscar
                </button>
              </form>
              <form className="form-inline col-md-5 col-sm-12">
                <select className="form-control px-5 mr-3">
                  <option value="">Selecciona un mes</option>
                  <option value="01">Enero</option>
                  <option value="02">Febrero</option>
                  <option value="03">Marzo</option>
                  <option value="04">Abril</option>
                  <option value="05">Mayo</option>
                  <option value="06">Junio</option>
                  <option value="07">Julio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>
                <button className="btn btn-primary my-sm-2 ">
                  <BsSearch /> Buscar
                </button>
              </form>
              <button className="btn btn-primary col-md-2 col-sm-12 my-sm-2">
                {" "}
                <BsTable /> Mostrar todo
              </button>
            </div>
          </div>
          <div className="col-md-12">
            <DataTableComponent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
