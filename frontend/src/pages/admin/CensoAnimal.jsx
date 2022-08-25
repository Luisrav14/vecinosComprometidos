import { BsPencilSquare } from "react-icons/bs";
import { FaBox, FaDog, FaPlus, FaTrash } from "react-icons/fa";
import { DataTableComponent, EliminarAlert, ModalWithBtn } from "../../components/";
import { MascotasForm } from "../../components/admin/forms/MascotasForm";

const InfoMascotas = () => {
  return (
    <div className="col-md-12">
      <div className="card-header">
        <h5>
          <FaDog /> Mascota 1
        </h5>
      </div>
      <div className="card-body row">
        <div className="col-md-6 mb-3">
          <strong>Tipo: </strong> Perro
        </div>
        <div className="col-md-6 mb-3">
          <strong>Raza: </strong> yorkshire terrier
        </div>
        <div className="col-md-6 mb-3">
          <strong>Edad: </strong> 10
        </div>
        <div className="col-md-6 mb-3">
          <strong>Certificado: </strong> No - no hay
        </div>
      </div>
    </div>
  );
};

export const CensoAnimal = () => {
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Colono",
      selector: (row) => row.colono,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Conflictos",
      selector: (row) => row.conflictos,
      center: true,
      width: "auto",
    },
    {
      name: "Número Mascotas",
      selector: (row) => row.numero_mascotas,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      width: "auto",
      center: true,
    },
  ];

  const data = [
    {
      id: "1",
      direccion: "Quintas #101",
      colono: "Prueba Colono 1",
      conflictos: <ModalWithBtn title="Conflictos" textBtn={<FaBox />} classBtn="btn btn-primary text-decoration-none" footer={false}></ModalWithBtn>,
      numero_mascotas: (
        <ModalWithBtn title="Información de mascotas" textBtn={"1"} classBtn="btn btn-link text-decoration-none" footer={false}>
          <InfoMascotas />
        </ModalWithBtn>
      ),
      acciones: [
        <button className="btn btn-warning mx-1">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <FaTrash />
        </button>,
      ],
    },
    {
      id: "2",
      direccion: "Quintas #102",
      colono: "Prueba Colono 2",
      conflictos: <ModalWithBtn title="Conflictos" textBtn={<FaBox />} classBtn="btn btn-primary text-decoration-none" footer={false}></ModalWithBtn>,
      numero_mascotas: (
        <ModalWithBtn title="Conflictos" textBtn={"1"} classBtn="btn btn-link text-decoration-none" footer={false}>
          <InfoMascotas />
        </ModalWithBtn>
      ),
      acciones: [
        <button className="btn btn-warning mx-1">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <FaTrash />
        </button>,
      ],
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Censo Animal</h1>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-md-6 pt-2">Total de cuotas de mantenimiento mensual</h5>
            <div className="col-md-2 text-right">
              <ModalWithBtn title="Agregar Mascota" iconBtn={<FaPlus />} textBtn="Agregar" classBtn="btn btn-primary text-decoration-none">
                <MascotasForm />
              </ModalWithBtn>
            </div>
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
