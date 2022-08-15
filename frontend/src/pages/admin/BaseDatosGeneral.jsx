import { BsPlusLg } from "react-icons/bs";

import DataTable from "react-data-table-component";

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
  {
    name: "Nombre",
    selector: (row) => row.title,
  },
  {
    name: "Dirección",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Prueba Numero 1",
    year: "Quintas #112",
  },
  {
    id: 2,
    title: "Prueba Numero dos",
    year: "Roble #333",
  },
];
export const BaseDatosGeneral = () => {
  return (
    <>
      <h1 className="mb-3 fw-bold">Base de datos general</h1>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Propietarios</h5>
            <div className="col-md-6 text-right">
              <a href="agregar-propietario" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </a>
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={data} pagination expandableRows expandableRowsComponent={ExpandedComponent} />
      </div>
    </>
  );
};
