import { BsEnvelope, BsPencilSquare, BsTrash } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { ModalWithBtn } from "../../components";

const DatosPersonales = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header shadow shadow-sm">
            <h5 className="card-title">Prueba Numero Uno</h5>
            <hr />
          </div>
          <div className="card-body row">
            <div className="col-md-6 mb-3">
              <strong>Correo: </strong> mail@mail.com
            </div>

            <div className="col-md-6 mb-3">
              <strong>Contraseña: </strong> **********
            </div>

            <div className="col-md-6 mb-3">
              <strong>Telefono: </strong> 61812345678
            </div>

            <div className="col-md-6 mb-3">
              <strong>Celular: </strong> 61812345678
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CasasRenta = () => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
      name: "Clave de unidad",
      selector: (row) => row.clave_unidad,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Datos del inquilino",
      selector: (row) => row.inquilino,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Datos del propietario",
      selector: (row) => row.propietario,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
      width: "auto",
    },
  ];

  const data = [
    {
      id: 1,
      clave_unidad: "2022",
      inquilino: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={"Inquilino Prueba Numero 1"} title="Datos personales" footer={false}>
          <DatosPersonales />
        </ModalWithBtn>
      ),
      propietario: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={"Propietario prueba 1"} title="Datos personales" footer={false}>
          <DatosPersonales />
        </ModalWithBtn>
      ),
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-success mx-2">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger mx-2">
          <BsTrash />
        </button>,
      ],
    },
    {
      id: 2,
      clave_unidad: "2022",
      inquilino: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={"Inquilino Prueba Numero 2"} title="Datos personales" footer={false}>
          <DatosPersonales />
        </ModalWithBtn>
      ),
      propietario: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={"Propietario prueba 2"} title="Datos personales" footer={false}>
          <DatosPersonales />
        </ModalWithBtn>
      ),
      acciones: [
        <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-success mx-2">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger mx-2">
          <BsTrash />
        </button>,
      ],
    },
  ];

  return (
    <>
      <div>
        <h1 className="mb-3 fw-bold">Casas en Renta</h1>

        <div className="card">
          <div className="card-header border-bottom border-1">
            <div className="row d-flex">
              <h5 className="card-title col-md-6 pt-2">Total de cuotas de mantenimiento mensual</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="col-md-12">
              <DataTableComponent columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
