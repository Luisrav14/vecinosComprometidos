import { BsEnvelope, BsPencilSquare, BsTrash } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { EliminarAlert, ModalWithBtn } from "../../components";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Estadisticas = () => {
  const [busqueda, setBusqueda] = useState("");

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
      name: "",
      selector: (row) => row.clave_unidad,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "",
      selector: (row) => row.inquilino,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "",
      selector: (row) => row.propietario,
      sortable: true,
      width: "auto",
      center: true,
    },
    {
      name: "",
      selector: (row) => row.acciones,
      center: true,
      width: "auto",
    },
  ];

  const data = [
    {
      id: 1,
      clave_unidad: "",
      inquilino: "",
      propietario: "",
      acciones: [
        /*  <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-success mx-2">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <BsTrash />
        </button>, */
      ],
    },
    {
      id: 2,
      clave_unidad: "",
      inquilino: "",
      propietario: "",
      acciones: [
        /*  <button className="btn btn-warning mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-success mx-2">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <BsTrash />
        </button>, */
      ],
    },
  ];

  return (
    <>
      <div>
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
                  <Select
                    options={[
                      { label: "Casas Construidas", value: "casas construidas" },
                      { label: "Casas en Proceso", value: "casas en proceso" },
                      { label: "Terrenos Baldíos", value: "lotes baldíos" },
                      { label: "Casas Habitadas", value: "casas habitadas" },
                      { label: "Casas sin habitar", value: "casas sin habitar" },
                      { label: "Casas Rentadas", value: "casas rentadas" },
                      { label: "Vehículos", value: "vehiculos" },
                      { label: "Personal Doméstico", value: "personal doméstico" },
                    ]}
                    onChange={({ value }) => setBusqueda(value)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  <FaSearch /> Buscar
                </button>
              </div>
            </form>

            <div className="col-md-12 mt-5">
              {busqueda != "" ? (
                <>
                  <h4 className="mb-3 fw-bolder font-italic">Resultados de {busqueda}</h4>
                  <DataTableComponent columns={columns} data={data} />
                </>
              ) : (
                <span className="mb-3 alert alert-light justify-content-center text-muted">No hay nada para mostrar</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
