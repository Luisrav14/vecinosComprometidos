import { BsPlusLg } from "react-icons/bs";

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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
        <DataTable columns={columns} data={data} pagination />
      </div>
    </>
  );
};
