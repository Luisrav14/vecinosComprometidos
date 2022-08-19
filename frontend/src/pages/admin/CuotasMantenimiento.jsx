import { BsFileEarmarkExcel, BsFileEarmarkPdf, BsSearch, BsTable } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

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
      total_cuotas: "$116,000.00",
      pendiente: "$0.00",
      pagado: "$116,000.00",
      estatus: <span className="badge badge-success">Pagado</span>,
    },
    {
      id: 2,
      año: "2022",
      mes: "Julio",
      total_cuotas: "$116,000.00",
      pendiente: "$60,505.00",
      pagado: "$55,495.00",
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
          {/* <div className="col-md-12 d-flex mb-3 justify-content-start">
            <button className="btn btn-primary mx-2">
              <BsFileEarmarkPdf /> PDF
            </button>
            <button className="btn btn-primary mx-2">
              <BsFileEarmarkExcel /> Excel
            </button>
          </div> */}
          <div className="col-md-12">
            <DataTableComponent columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
