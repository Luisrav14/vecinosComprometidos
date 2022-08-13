import { AdminDashboard } from "./AdminDashboard";
import { BsGraphUp, BsGraphDown, BsCashStack, BsHouseDoor, BsFillCreditCardFill } from "react-icons/bs";
import { LineChart, BarChart, DonutChart } from "../../components/";

export const ResumenInformacion = () => {
  return (
    <AdminDashboard title="Resumen Informativo">
      <div className="row d-flex">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Ingreso Mensual</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <BsGraphUp />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">$23,000.00</h1>
              <div className="mb-0">
                <span className="text-muted">Mes: Agosto</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Egreso Mensual</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <BsGraphDown />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">$8,000.00</h1>
              <div className="mb-0">
                <span className="text-muted">Mes: Agosto</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Monto Acumulado</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <BsCashStack />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">$250,382.00</h1>
              <div className="mb-0">
                <span className="text-muted">Acumulado</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Propiedades Morosas</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <BsHouseDoor />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">28</h1>
              <div className="mb-0">
                <span className="text-muted">Acumulado</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-9">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Ingresos Mensuales</div>
              <hr />
            </div>
            <div className="card-body">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Acceso Rápido</div>
              <hr />
            </div>
            <div className="card-body text-center">
              <a className="btn btn-primary text-light mb-3 form-control">Base de datos general</a>
              <a className="btn btn-primary text-light mb-3 form-control">Cuotas de mantenimiento</a>
              <a className="btn btn-primary text-light mb-3 form-control">Pagos realizados</a>
              <a className="btn btn-primary text-light mb-3 form-control">Saldo a favor</a>
              <a className="btn btn-primary text-light mb-3 form-control">Extraordinarios</a>
              <a className="btn btn-primary text-light mb-3 form-control">Facturación</a>
              <a className="btn btn-primary text-light mb-3 form-control">Acceso Visitas</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="row d-flex">
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card text-center p-5">
                <a href="/admin">
                  <div className="card-block">
                    <h5 className="m-b-0 text-primary fw-bolder">Total Suscripciones</h5>
                    <h4 className="m-t-15 m-b-15 text-danger">
                      <BsFillCreditCardFill /> 64
                    </h4>
                    <p className="m-b-0"></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-block">
              <div className="card-header">
                <div className="card-title">Egreso Mensual</div>
                <h3 className="fw-bolder my-2">$43,650.00</h3>
                <hr />
              </div>
            </div>
            <div className="card-body">
              <BarChart />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Egreso Trimestral</div>
              <h3 className="fw-bolder my-2">$590,820.00</h3>
              <hr />
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-4 pb-4">
                  <h3 className="fw-bolder">145</h3>
                  <p className="mb-2">
                    Nota de remisión <span className="float-end fw-bold">89%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div className="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: "89%" }}></div>
                  </div>
                </li>
                <li className="list-group-item px-4 pb-4">
                  <h3 className="fw-bolder">18</h3>
                  <p className="mb-2 ">
                    Factura <span className="float-end fw-bold">11%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div className="progress-bar" role="progressbar" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100" style={{ width: "11%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Métodos de pago</div>
              <hr />
            </div>
            <div className="card-block p-2">
              <DonutChart />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Propiedades</div>
              <hr />
            </div>
            <div className="card-block p-2">
              <DonutChart />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Casas</div>
              <hr />
            </div>
            <div className="card-block p-2">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};
