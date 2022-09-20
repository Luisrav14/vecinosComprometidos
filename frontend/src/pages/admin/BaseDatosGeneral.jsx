import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare } from "react-icons/bs";

import Swal from "sweetalert2";
import { LoaderBtn, ModalWithBtn } from "../../components";
import globalConfig from "../../global/globalConfig";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

const DatosPersonales = ({ info }) => {
  return (
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
          <label>Contraseña</label>
          <input className="form-control" type="password" value={info.password} disabled={true} />
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
  );
};

const InformacionPropiedades = ({ info }) => {
  return (
    <div className="container">
      <form className="row justify-content-center p-4">
        <div className="form-group col-md-4 mb-3">
          <label>Clave de Unidad</label>
          <input type="text" className="form-control" value={info.unidad} disabled={true} />
        </div>
        <div className="form-group col-md-4 mb-3">
          <label>Calle</label>
          <input type="text" className="form-control" value={info.calle} disabled={true} />
        </div>
        <div className="form-group col-md-4 mb-3">
          <label>Número</label>
          <input type="text" className="form-control" value={`#${info.numero_ext}`} disabled={true} />
        </div>

        <div className="form-group col-md-12 mb-3">
          <label>Descripción</label>
          <textarea className="form-control" cols="10" rows="2" disabled={true}>
            {info.descripcion}
          </textarea>
        </div>

        <div className="form-group col-md-6 mb-3">
          <label>Cuota de mantenimiento mensual</label>
          <input type="text" className="form-control" value={`$${info.cuota.toFixed(2)}`} disabled={true} />
        </div>
        <div className="form-group col-md-6 mb-3">
          <label>Metros (M²)</label>
          <input type="text" className="form-control" value={`${info.m2} m²`} disabled={true} />
        </div>
        <div className="form-group col-md-6 mb-3">
          <label>Tipo de casa</label>
          <input type="text" className="form-control" value={`${info.tipo_casa}`} disabled={true} />
        </div>
        <div className="form-group col-md-6 mb-3">
          <label>Estatus de la casa</label>
          <input type="text" className="form-control" value={`${info.estatus_casa}`} disabled={true} />
        </div>
      </form>
    </div>
  );
};

export const BaseDatosGeneral = () => {
  const [data, setData] = useState([]);
  const [loaderMail, setSendMail] = useState(false);
  const rows = [];

  const sendEmail = async () => {
    setSendMail(true);
    await Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
    setSendMail(false);
  };

  useEffect(() => {
    fetch(globalConfig.API_URL + "/propietarios")
      .then((res) => res.json())
      .then((json) => {
        json.status === "success" ? setData(json.data) : setData([]);
        console.log(json);
      });
  }, []);

  data.forEach((row, i) => {
    rows.push({
      id_usuario: i + 1,
      nombre: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={row.nombre + row.apellidoP + row.apellidoM} title="Datos personales" size="sm" footer={false}>
          <DatosPersonales info={row} />
        </ModalWithBtn>
      ),
      direccion: (
        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={`${row.calle} #${row.numero_ext}`} title="Datos de la propiedad" size="lg" footer={false}>
          <InformacionPropiedades info={row} />
        </ModalWithBtn>
      ),
      cuota: `$${row.cuota.toFixed(2)}`,
      acciones: [
        <Link to={`/admin/editar-propietario/${row.id_usuario}`} className="btn btn-success mx-2">
          <BsPencilSquare />
        </Link>,
        <LoaderBtn classBtn="btn btn-primary" textBtn={<BsEnvelope />} loadText="" isLoading={loaderMail} onClick={sendEmail} />,
      ],
    });
  });

  const columns = [
    {
      id: "id",
      name: "#",
      selector: (row) => row.id_usuario,
    },
    {
      id: "nombre",
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      id: "direccion",
      name: "Dirección",
      selector: (row) => row.direccion,
    },
    {
      id: "cuota_mantenimiento",
      name: "Cuota Mantenimiento",
      selector: (row) => row.cuota,
    },
    {
      id: "acciones",
      name: "Acciones",
      selector: (row) => row.acciones,
    },
  ];

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
          <DataTableComponent columns={columns} data={rows} />
        </div>
      </div>
    </>
  );
};
