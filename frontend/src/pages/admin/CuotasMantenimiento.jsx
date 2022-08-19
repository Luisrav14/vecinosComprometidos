import { BsEnvelope, BsPencilSquare, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const CuotasMantenimiento = () => {
  const columns = [
    {
      id: "id",
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "5%",
      center: true,
    },
    {
      id: "Nombre",
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      center: true,
    },
    {
      id: "Dirección",
      name: "Dirección",
      selector: (row) => row.direccion,
      sortable: true,
      center: true,
    },
    {
      id: "CuotaMantenimiento",
      name: "Cuota Mantenimiento",
      selector: (row) => row.cuota_mantenimiento,
      sortable: true,
      center: true,
    },
    {
      id: "Acciones",
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      nombre: "Prueba Numero 1",
      direccion: "Quintas #112",
      cuota_mantenimiento: "$526.00",
      acciones: [
        <Link to="/admin/editar-propietario" className="btn btn-warning mx-2">
          <BsPencilSquare />
        </Link>,
        <button className="btn btn-primary mx-2">
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
        <Link to="/admin/editar-propietario" className="btn btn-warning mx-2">
          <BsPencilSquare />
        </Link>,
        <button className="btn btn-primary mx-2">
          <BsEnvelope />
        </button>,
      ],
    },
  ];
  return (
    <>
      <h1 className="mb-3 fw-bold">Cuotas Mantenimiento</h1>

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
        <DataTableComponent columns={columns} data={data} />
      </div>
    </>
  );
};
