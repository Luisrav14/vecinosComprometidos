import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";

export const Efectivo = () => {
  return (
    <div className="wrapper">
      <SidebarUser />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0"> </h5>

                    <div className=" rounded col-xl-12 col-md-12">
                      <div className="card-block mb-5 mt-5">
                        <div className="text-center">
                          <img className="card-img-top" style={{ width: "20%" }} src=" https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/warning.png" alt="" />
                          <h2>
                            Atención tú método de pago actual es: <br></br> transferencia
                          </h2>
                          <div className="container mt-5">
                            <div>
                              <h3>Comunicate con el administrador para cambiar tu método de pago</h3>
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
      </div>
    </div>
  );
};
