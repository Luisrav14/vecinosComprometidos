import Swal from "sweetalert2";
import { BsFillEyeFill, BsFillPieChartFill } from "react-icons/bs";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

const sendEmail = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Email enviado exitosamente",
  });
};

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "8%",
    center: true,
  },
  {
    name: "Titulo",
    selector: (row) => row.titulo,
    sortable: true,

    center: true,
  },
  {
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
    width: "30%",
    center: true,
  },
  {
    name: "Fecha finalizacion",
    selector: (row) => row.fecha,
    sortable: true,
    center: true,
  },

  {
    name: "Acciones",
    selector: (row) => row.acciones,
    center: true,
  },
];

const data = [
  {
    id: 1,
    fecha: "18/07/22",
    titulo: "Encuesta Numero 1",
    descripcion: "Elegir color del alumbrado",

    acciones: [
      <button class="btn btn-success mx-2" title="Contestar ">
        <BsFillPieChartFill />
      </button>,
      <button class="btn btn-success mx-2" title="Ver Resultados">
        <BsFillEyeFill />
      </button>,
    ],
  },
  {
    id: 2,
    fecha: "18/08/22",
    titulo: "Encuesta Numero 2",
    descripcion: "Elegir color de la entrada",

    acciones: [
      <button class="btn btn-success mx-2" title="Contestar ">
        <BsFillPieChartFill />
      </button>,
      <button class="btn btn-success mx-2" title="Ver Resultados">
        <BsFillEyeFill />
      </button>,
    ],
  },
];

export const Encuestas = () => {
  return (
    <>
      <div className="col-12">
        <h1>
          <b>Encuestas</b>
        </h1>
        <h5>En esta pagina podemos ver encuestas relevantes del fraccionamiento, podremos participar con la columna de acciones, es improtante dejar oir nuestra opinion.</h5>
        <div className="card">
          <div className="card-header mb-0">
            <div className=" rounded col-xl-12 col-md-12">
              <div className="card-block mb-5 mt-3">
                <div className="text-center">
                  <div className="card-block ">
                    <div className="row d-flex justify-content-around">
                      <DataTableComponent columns={columns} data={data} />
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
    </>
  );
};
