import { BsEnvelope, BsPencilSquare, BsTrash } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { EliminarAlert, ModalWithBtn } from "../../components";
import { useEffect, useState } from "react";
import globalConfig from "../../global/globalConfig";

const DatosInquilino = ({ info }) => {
  return (
    <>
      <div className="container">
        <div className="mx-3 mt-2">
          <h5 className="card-title">
            {info.arr_nombre} {info.arr_ap} {info.arr_am}
          </h5>
          <hr />
        </div>
        <form>
          <div className="form-group col-md-12 mb-3">
            <label>Correo</label>
            <input className="form-control" type="text" value={info.correo} disabled={true} />
          </div>
          <div className="form-group col-md-12 mb-3">
            <label>Teléfono</label>
            <input className="form-control" type="text" value={info.telefono} disabled={true} />
          </div>
          <div className="form-group col-md-12 mb-3">
            <label>Celular</label>
            <input className="form-control" type="text" value={info.celular} disabled={true} />
          </div>
        </form>
      </div>
    </>
  );
};
const DatosPropietario = ({ info }) => {
  return (
    <>
      <div className="container">
        <div className="mx-3 mt-2">
          <h5 className="card-title">
            {" "}
            {info.nombre} {info.apellidoP} {info.apellidoM}
          </h5>
          <hr />
        </div>
        <form>
          <div className="form-group col-md-12 mb-3">
            <label>Correo</label>
            <input className="form-control" type="text" value={info.correo} disabled={true} />
          </div>
          <div className="form-group col-md-12 mb-3">
            <label>Teléfono</label>
            <input className="form-control" type="text" value={info.telefono} disabled={true} />
          </div>
          <div className="form-group col-md-12 mb-3">
            <label>Celular</label>
            <input className="form-control" type="text" value={info.celular} disabled={true} />
          </div>
        </form>
      </div>
    </>
  );
};

export const CasasRenta = () => {
  const [data, setData] = useState([]);
  const rows = [];

  useEffect(() => {
    fetch(globalConfig.API_URL + "/casas-renta")
      .then((res) => res.json())
      .then((json) => {
        json.status === "success" ? setData(json.data) : setData([]);
        console.log(json.data);
      });
  }, []);

  data.forEach((row, i) => {
    rows.push({
      id: i + 1,
      clave_unidad: `${row.unidad}`,
      inquilino: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={`${row.arr_nombre} ${row.arr_ap} ${row.arr_am}`} title="Datos del inquilino" footer={false}>
          <DatosInquilino info={row} />
        </ModalWithBtn>
      ),
      propietario: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={`${row.nombre} ${row.apellidoP} ${row.apellidoM}`} title="Datos del propietario" footer={false}>
          <DatosPropietario info={row} />
        </ModalWithBtn>
      ),
      acciones: [
        <button className="btn btn-success mx-2">
          <BsPencilSquare />
        </button>,
        <button className="btn btn-primary mx-2">
          <BsEnvelope />
        </button>,
        <button className="btn btn-danger" onClick={EliminarAlert}>
          <BsTrash />
        </button>,
      ],
    });
  });

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
            <DataTableComponent columns={columns} data={rows} />
          </div>
        </div>
      </div>
    </>
  );
};
