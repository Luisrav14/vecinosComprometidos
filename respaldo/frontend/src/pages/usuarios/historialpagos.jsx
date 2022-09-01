import React from "react";
import DataTable from "react-data-table-component";
import { BsFillFileEarmarkFill } from "react-icons/bs";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const Pagar = () => {
  Swal.fire({
    icon: "success",
    title: "Operación realizada",
    text: "Pagado enviado exitosamente",
  });
};
const columns = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
  },
  {
    name: "Concepto",
    selector: (row) => row.concepto,
  },
  {
    name: "Metodo de pago",
    selector: (row) => row.metodo,
  },
  {
    name: "Monto",
    selector: (row) => row.monto,
  },
  {
    name: "Recibo de pago",
    selector: (row) => row.recibo,
  },
];

const data = [
  {
    id: 1,
    fecha: "16/08/2022",
    concepto: "Prueba Numero 1",
    metodo: "Quintas #112",
    monto: "600",
    recibo: [
      <button class="btn btn-success mx-2" onClick={Pagar}><BsFillFileEarmarkFill/>
      
        </button>,
         ],
  },
  {
    id: 1,
    fecha: "16/08/2022",
    concepto: "Prueba Numero 2",
    metodo: "Quintas #112",
    monto: "600",
    recibo: [
      <button class="btn btn-success mx-2" onClick={Pagar}><BsFillFileEarmarkFill/>
      
        </button>,
         ],
  },
];
export const HistorialPagos = () => {
  return (
    <>
      <div className="">
        <div className="col-12">
          <h1>
            <b>Historial de pagos</b>
          </h1>
          <h5>En esta página veremos la cantidad total de saldo que se encuentra disponible a nuestro favor, y que se aplicara en el siguiente pago.</h5>

          <h5 className="card-title mb-0"> </h5>

          <div className="card-block mb-5 mt-5">
            <div className="text-center">
              <div className="container mt-5">
                <div className="card-block">
                  <div className="row">
                    <form className="form-group form-default col-md-5 col-sm-12 row justify-content-center">
                      <div className="col-md-6 col-sm-12 mt-1">
                        <label className="col-sm-12" htmlFor="">Buscar por año:</label>
                        <select name="" className="form-control" id="">
                          <option selected disabled>Selcciona un año</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary col-md-4 col-sm-12 mt-5">Buscar</button>
                    </form>
                    <form className="form-group form-default col-md-5 col-sm-12 row justify-content-center">
                      <div className="col-md-6 col-sm-12 mt-1">
                        <label className="col-sm-12">Buscar por mes:</label>

                        <select className="form-control" name="month" required>
                          <option selected disabled>Selcciona un mes</option>
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
                      </div>
                      <button type="submit" className="btn btn-primary col-md-4 col-sm-12 mt-5">  Buscar</button>
                    </form>
                    <form id="" class="form-group form-default col-md-2 col-sm-12 row">
                      <label class="col-sm-12"></label>
                      <label class="col-sm-12"></label>
                      <label class="col-sm-12"></label>
                      
                        <button type="submit" class="btn btn-primary col-md-12 col-sm-12">  Mostrar Todos</button>
                    </form>
                    <DataTable columns={columns} data={data} pagination/>
                  </div>
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
