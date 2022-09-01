import Swal from "sweetalert2";

import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { BsFillFileEarmarkFill } from "react-icons/bs";

const Pagar = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Pagado enviado exitosamente",
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
    name: "Fecha de pago ",
    selector: (row) => row.fecha,
    sortable: true,

    center: true,
  },
  {
    name: "Saldo a favor	 ",
    selector: (row) => row.saldo,
    sortable: true,

    center: true,
  },
  {
    name: "Comprobante",
    selector: (row) => row.comprobante,
    sortable: true,

    center: true,
  },
  {
    name: "Estatús",
    selector: (row) => row.estatus,
    sortable: true,
    center: true,
  },
];

const data = [
  {
    id: 1,
    fecha: "19/08/22",
    saldo: "$865",
    comprobante: [
      <button class="btn btn-success mx-2" onClick={Pagar}>
        <BsFillFileEarmarkFill />
      </button>,
    ],
    estatus: "Pendiente",
  },
  {
    id: 2,
    fecha: "19/08/22",
    saldo: "$865",
    comprobante: [
      <button class="btn btn-success mx-2" onClick={Pagar}>
        <BsFillFileEarmarkFill />
      </button>,
    ],
    estatus: "Pendiente",
  },
];
export const SaldoFavor = () => {
  return (
    <>
      <div className="">
        <div className="col-12">
          <h1>
            <b>Saldo a Favor</b>
          </h1>
          <h5>En esta página veremos la cantidad total de saldo que se encuentra disponible a nuestro favor, y que se aplicara en el siguiente pago.</h5>

          <h5 className="card-title mb-0"> </h5>

          <div className="card-block mb-5 mt-5">
            <div className="text-center">
              <div className="container mt-5">
                <div>
                  <div class="row">
                    <div class="col">
                      {" "}
                      <form class="">
                        <label className="col-12 mb-1">Buscar por año:</label>
                        <select class="form-control" name="year" required>
                          <option selected disabled>
                            Selcciona un año
                          </option>
                          <option>2021</option>
                          <option>2022</option>
                        </select>
                      </form>
                    </div>
                    <div class="col">
                      {" "}
                      <button type="submit" class="btn btn-success">
                        {" "}
                        <i class="FaAddressCard"></i> Buscar
                      </button>
                    </div>
                    <div class="col">
                      {" "}
                      <form class="">
                        <label class="col-sm-12">Buscar por mes:</label>

                        <select class="form-control" name="month" required>
                          <option selected disabled>
                            Selcciona un mes
                          </option>
                          <option value="01">Enero</option>
                          <option value="02">Febrero</option>
                          <option value="03">Marzo</option>
                          <option value="04">Abril</option>
                          <option value="05">Mayo</option>
                          <option value="06">Junio</option>
                          <option value="07">Julio</option>
                          <option value="08">Agosto</option>
                          <option value="09">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>

                        <div className="col"></div>
                      </form>
                    </div>
                    <div class="col">
                      {" "}
                      <button type="submit" class="btn btn-success">
                        {" "}
                        <i class="FaAddressCard"></i> Buscar
                      </button>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col"></div>
                    <div class="col"></div>
                  </div>

                  <DataTableComponent columns={columns} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body"></div>
      </div>
      <div className="text-right">
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/openpay-logo.png" alt="" />
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/ssl.png" alt="" />
      </div>
    </>
  );
};
