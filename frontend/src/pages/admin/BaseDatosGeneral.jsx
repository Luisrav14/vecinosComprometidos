import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsPinAngle } from "react-icons/bs";

import Swal from "sweetalert2";

const sendEmail = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Email enviado exitosamente",
  });
};

const ExpandedComponent = ({ data }) => (
  <pre className="mx-5 px-5">
    <div className="container">
      <div className="row">
        <table className="table table-sm table-borderless">
          <thead className="">
            <tr>
              <th scope="col">Clave de unidad</th>
              <th scope="col">Método de pago</th>
              <th scope="col">Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FA-522-00</td>
              <td>Suscripción</td>
              <td>
                <button className="btn btn-success">
                  <BsPinAngle />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </pre>
);

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Dirección",
    selector: (row) => row.direccion,
    sortable: true,
  },
  {
    name: "Cuota Mantenimiento",
    selector: (row) => row.cuota_mantenimiento,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
  },
];

const data = [
  {
    id: 1,
    nombre: "Prueba Numero 1",
    direccion: "Quintas #112",
    cuota_mantenimiento: "$526.00",
    acciones: [
      <Link to="/admin/editar-propietario" class="btn btn-warning mx-2">
        <BsPencilSquare />
      </Link>,
      <button class="btn btn-primary mx-2" onClick={sendEmail}>
        <BsEnvelope />
      </button>,
    ],
  },
  {
    id: 2,
    nombre: "Prueba Numero dos",
    direccion: "Roble #333",
    cuota_mantenimiento: "$526.00",
    acciones: [
      <Link to="/admin/editar-propietario" class="btn btn-warning mx-2">
        <BsPencilSquare />
      </Link>,
      <button class="btn btn-primary mx-2" onClick={sendEmail}>
        <BsEnvelope />
      </button>,
    ],
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
              <Link to="/admin/agregar-propietario" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={data} pagination expandableRows expandableRowsComponent={ExpandedComponent} paginationComponentOptions={paginationComponentOptions} />
      </div>
    </>
  );
};
