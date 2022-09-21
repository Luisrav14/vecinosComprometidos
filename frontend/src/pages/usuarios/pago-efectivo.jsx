import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import globalConfig from "../../global/globalConfig";
import { LoaderBtn, ModalWithBtn } from "../../components";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsFillFileEarmarkFill,BsFillTrashFill, BsFillChatLeftTextFill } from "react-icons/bs";
const Pagar = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Pagado enviado exitosamente",
  });
};

const columns2 = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "8%",
    center: true,
  },
  {
    name: "Concepto ",
    selector: (row) => row.concepto,
    sortable: true,

    center: true,
  },
  {
    name: "Monto",
    selector: (row) => row.monto,
    sortable: true,

    center: true,
  },
  {
    name: "Estatús",
    selector: (row) => row.estatus,
    sortable: true,
    center: true,
  },

  {
    name: "Acciones",
    selector: (row) => row.acciones,
    center: true,
  },
];

const data1 = [
  {
    id: 1,
    concepto: "Cuota de mantenimiento al mes de: Noviembre del 2022",
    monto: "$500.00	",
    estatus: "Pendiente",

    acciones: [
      <button class="btn btn-success mx-2" onClick={Pagar}>
        Pagar
      </button>,
    ],
  },
 
];

export const Efectivo = () => {
  const [data, setData] = useState([]);
  const [loaderMail, setSendMail] = useState(false);
  const rows = [];

  useEffect(() => {
    fetch(globalConfig.API_URL_ACTAS + "/mostrarTodos")
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
    <main className="content">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <h1>
              <b>Pagos en Efectivo</b>
            </h1>
            <h5>En esta página podemos ver los pagos pendientes con nuestro metodo de pago seleccionado, podres pagar haciendo clic en el boton de la columna de acciones.</h5>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0"> </h5>

                <div className=" rounded col-xl-12 col-md-12">
                  <div className="card-block mb-5 mt-5">
                    <div className="text-center">
                      <div className="container mt-5">
                        <div>
                          <DataTableComponent columns={columns} data={rows} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body"></div>
            </div>
          </div>
          <div className="text-right">
            <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/openpay-logo.png" alt="" />
            <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/ssl.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};
