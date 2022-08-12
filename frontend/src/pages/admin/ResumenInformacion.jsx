import { AdminDashboard } from "./AdminDashboard";
import { BsGraphUp, BsGraphDown, BsCashStack, BsHouseDoor } from "react-icons/bs";

export const ResumenInformacion = () => {
  return (
    <AdminDashboard>
      <h1 className="mb-4 fw-bold">Resumen Informativo</h1>
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
      </div>
    </AdminDashboard>
  );
};
