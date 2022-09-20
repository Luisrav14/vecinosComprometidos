import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill,BsFillTrashFill, BsFillChatLeftTextFill } from "react-icons/bs";
import globalConfig from "../../global/globalConfig";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { LoaderBtn, ModalWithBtn } from "../../components";

const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Email enviado exitosamente",
    });
  };


export const AnunciosAcuerdos = () => {
  const [data, setData] = useState([]);
  const [loaderMail, setSendMail] = useState(false);
  const rows = [];

  useEffect(() => {
    fetch(globalConfig.API_URL_ACTAS)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        console.log(json.data);
      });
  }, []);

  (!data.length === 0) &
    data.forEach((row, i) => {
      rows.push({
        id_usuario: i + 1,
        titulo: `${row.titulo}`,
        motivo: `${row.motivo}`,
        descripcion: `${row.descripcion}`,
        documento: [
          
          <LoaderBtn classBtn="btn btn-primary" textBtn={<BsFillFileEarmarkFill />} loadText="" isLoading={loaderMail} onClick={sendEmail} />,
        ],
        acciones: [
          <Link to={`/admin/editar-propietario/${row.id_usuario}`} className="btn btn-success mx-2">
            <BsPencilSquare />
          </Link>,
          <LoaderBtn classBtn="btn btn-danger" textBtn={<BsFillTrashFill />} loadText="" isLoading={loaderMail} onClick={sendEmail} />,
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
      id: "Titulo",
      name: "Titulo",
      selector: (row) => row.titulo,
    
    },
    {
      id: "Motivo",
      name: "Motivo",
      selector: (row) => row.motivo,
     
    },
    {
      id: "Descripcion",
      name: "Descripcion",
      selector: (row) => row.descripcion,
    
    },
    {
      id: "Documento",
      name: "Documento",
      selector: (row) => row.documento,
    
    },
    {
      id: "acciones",
      name: "Acciones",
      selector: (row) => row.acciones,
    },
  ];


  return (
    <>
      <h1 className="mb-3 fw-bold">Anuncios</h1>
      <h6>Aquí podremos encontrar anuncios que se emitieron para convocar a la asamblea, así como el/los acuerdo(s) a los que se llegó durante la misma.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Anuncios </h5>
           
            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-anuncios" className="btn btn-primary">
                <BsPlusLg /> 
              </Link>
            </div>
          </div>
        </div>

        <DataTableComponent columns={columns} data={rows} />
      </div>
    </>
  );
};
