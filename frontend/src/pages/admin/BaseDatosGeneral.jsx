import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare } from "react-icons/bs";

import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { ModalWithBtn } from "../../components";
import globalConfig from "../../global/globalConfig";

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

const InformacionPropiedades = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body row">
            <div className="form-material row">
              <div className="form-group col-md-12 mb-3">
                <strong>Clave de Unidad: </strong> 1-Alc-100-001
              </div>

              <div className="form-group col-md-4 mb-3">
                <strong>Calle: </strong> Alcatraces
              </div>

              <div className="form-group col-md-4 mb-3">
                <strong>Número: </strong> 100
              </div>

              <div className="form-group col-12 mb-3">
                <strong>Descripción: </strong> Cuota de $2,602.41 por convenio de pago, de marzo a diciembre 2022.
              </div>

              <div className="form-group col-md-9 mb-3">
                <strong>Cuota de mantenimiento mensual: </strong> 2602.41
              </div>

              <div className="form-group col-md-6 mb-3">
                <strong>Metros (M²): </strong> 366.78
              </div>

              <div className="form-group col-md-6 mb-3">
                <strong>Tipo de casa: </strong> construida
              </div>

              <div className="form-group col-md-6 mb-3">
                <strong>Estatus de la casa: </strong> habitada
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const sendEmail = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Email enviado exitosamente",
  });
};

export const BaseDatosGeneral = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      id: "id",
      name: "#",
      selector: (row) => row.id_usuario,
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

  useEffect(() => {
    fetch(globalConfig.API_URL + "/propietarios")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

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
        <div className="card-body">
          <DataTableComponent columns={columns} data={data} expandible={true} />
        </div>
      </div>
    </>
  );
};
