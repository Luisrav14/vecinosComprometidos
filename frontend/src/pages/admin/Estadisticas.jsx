import { BsEnvelope, BsPencilSquare, BsTrash } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { EliminarAlert, ModalWithBtn } from "../../components";
import { FaSearch } from "react-icons/fa";

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

export const Estadisticas = () => {
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
        <button className="btn btn-danger" onClick={EliminarAlert}>
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
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <BsTrash />
        </button>,
      ],
    },
  ];

  return (
    <>
      {/* <div>
        <h1 className="mb-3 fw-bold">Estadísticas</h1>

        <div className="card">
          <div className="card-header border-bottom border-1">
            <div className="row d-flex">
              <h5 className="card-title col-md-6 pt-2">Generales</h5>
            </div>
          </div>
          <div className="card-body">
            <form className="row d-flex justify-content-center">
              <div className="col-md-4">
                <div className="form-group">
                  <select className="form-select">
                    <option disabled>Selecciona una opción</option>
                    <option value="1">Casas Construidas</option>
                    <option value="2">Casas en Proceso</option>
                    <option value="3">Terrenos Baldíos</option>
                    <option value="4">Casas Habitadas</option>
                    <option value="5">Casas Sin Habitar</option>
                    <option value="6">Casas Rentadas</option>
                    <option value="7">Vehículos</option>
                    <option value="8">Personal Doméstico</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  <FaSearch /> Buscar
                </button>
              </div>
            </form>

            <div className="col-md-12 mt-5">
              <h4 className="fw-bold mb-3">Resultados</h4>
              <DataTableComponent columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
