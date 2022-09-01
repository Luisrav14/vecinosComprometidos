import { FaCar, FaUser } from "react-icons/fa";
import { DataTableComponent, ModalWithBtn } from "../../components/";

const DatosPropiedad = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header shadow shadow-sm">
            <h5 className="card-title">Información de Propiedad</h5>
          </div>
          <div className="card-body row">
            <div className="col-md-12 form-group">
              <label>Dirección</label>
              <input className="form-control" type="text" value={"Quintas #120"} disabled />
            </div>
            <div className="col-md-12 form-group">
              <label>Descripción de la Propiedad</label>
              <input className="form-control" type="text" value={"Casa prueba"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Cuota de mantenimiento</label>
              <input className="form-control" type="text" value={"$485.00"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Metros (M²)</label>
              <input className="form-control" type="text" value={"240 M²"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Tipo de terreno</label>
              <input className="form-control" type="text" value={"Construida"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Estatus del terreno</label>
              <input className="form-control" type="text" value={"Habitada"} disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DatosHabitantes = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body row">
            <div className="col-md-12 border-bottom border-1 mb-3">
              <p className="text-primary fw-bolder">
                {" "}
                <FaUser /> Persona 1
              </p>
            </div>
            <div className="col-md-12 form-group">
              <label>Nombre</label>
              <input className="form-control" type="text" value={"Persona Uno"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Correo</label>
              <input className="form-control" type="text" value={"mail@mail.com"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Fecha Nacimiento</label>
              <input className="form-control" type="text" value={"dd/mm/aaaa"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Celular</label>
              <input className="form-control" type="text" value={"0000000000"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Profesión</label>
              <input className="form-control" type="text" value={"Profesión"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Actividad Principal</label>
              <input className="form-control" type="text" value={"Actividad"} disabled />
            </div>
            <div className="col-md-6 form-group">
              <label>Parentezco o relación</label>
              <input className="form-control" type="text" value={"Hijo"} disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DatosVehiculos = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body row">
          <div className="col-md-12 border-bottom border-1 mb-3">
            <p className="text-primary fw-bolder">
              <FaCar /> Vehículo 1
            </p>
          </div>
          <div className="col-md-6 form-group">
            <label>Marca</label>
            <input className="form-control" type="text" value={"Kia"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Modelo</label>
            <input className="form-control" type="text" value={"Soul"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Color</label>
            <input className="form-control" type="text" value={"Blanco"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Tarjeta de acceso</label>
            <input className="form-control" type="text" value={"00000000"} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

const DatosPersonal = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body row">
          <div className="col-md-12 border-bottom border-1 mb-3">
            <p className="text-primary fw-bolder">
              {" "}
              <FaUser /> Personal
            </p>
          </div>
          <div className="col-md-12 form-group">
            <label>Nombre</label>
            <input className="form-control" type="text" value={"Persona Uno"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Fecha Nacimiento</label>
            <input className="form-control" type="text" value={"dd/mm/aaaa"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Celular</label>
            <input className="form-control" type="text" value={"0000000000"} disabled />
          </div>
          <div className="col-md-6 form-group">
            <label>Posición</label>
            <input className="form-control" type="text" value={"Empleada Doméstica"} disabled />
          </div>
          <div className="col-md-3 form-group">
            <label>Hora de entrada</label>
            <input className="form-control" type="text" value={"09:00 AM"} disabled />
          </div>
          <div className="col-md-3 form-group">
            <label>Hora de salida</label>
            <input className="form-control" type="text" value={"05:00 PM"} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export const InformacionPersonal = () => {
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Propiedades",
      selector: (row) => row.propiedades,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Habitantes",
      selector: (row) => row.habitantes,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Vehículos",
      selector: (row) => row.vehiculos,
      center: true,
      width: "auto",
    },
    {
      name: "Personal Doméstico",
      selector: (row) => row.personal,
      sortable: true,
      width: "auto",
      center: true,
    },
  ];

  const data = [
    {
      nombre: "Prueba Propietario 1",
      propiedades: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Propiedades" textBtn="1" footer={false}>
          <DatosPropiedad />
        </ModalWithBtn>
      ),
      habitantes: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Habitantes" textBtn="1" footer={false}>
          <DatosHabitantes />
        </ModalWithBtn>
      ),
      vehiculos: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Vehículos" textBtn="1" footer={false}>
          <DatosVehiculos />
        </ModalWithBtn>
      ),
      personal: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Personal Doméstico" textBtn="1" footer={false}>
          <DatosPersonal />
        </ModalWithBtn>
      ),
    },
    {
      nombre: "Prueba Propietario 2",
      propiedades: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Propiedades" textBtn="1" footer={false}>
          <DatosPropiedad />
        </ModalWithBtn>
      ),
      habitantes: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Habitantes" textBtn="1" footer={false}>
          <DatosHabitantes />
        </ModalWithBtn>
      ),
      vehiculos: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Vehículos" textBtn="1" footer={false}>
          <DatosVehiculos />
        </ModalWithBtn>
      ),
      personal: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Personal Doméstico" textBtn="1" footer={false}>
          <DatosPersonal />
        </ModalWithBtn>
      ),
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Información General</h1>

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
    </>
  );
};
