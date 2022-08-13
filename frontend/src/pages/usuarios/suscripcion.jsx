import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";

export const Suscripcion = () => {
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
                 
                  <div className="card-header mb-0">
                   

                    <div className=" rounded col-xl-12 col-md-12">
                      <div className="card-block mb-5 mt-3">
                        <div className="text-center">



                          <div className="card-block ">

                            <div className="row d-flex justify-content-around">

                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card" style={{ width: "80%" }}>
                                  <img className="img-fluid" src=" https://quintasresidencial.com/demo/fraccionamiento/QuintasResidencial/assets/images/mensual.jpg" alt="" />
                                  <div className="card-body border rounded">
                                    <h5 className="card-title text-center mb-2">Cantidad:</h5>
                                    <h2 className="card-text text-center mb-3" style={{ fontSize: "1.2rem" }}><strong>$ 566.00 MXP</strong> </h2>
                                    <div className="text-center"><a href="" className="btn btn-primary">Seleccionar</a></div>
                                  </div>
                                </div>
                              </div>


                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card" style={{ width: "80%" }}>
                                  <img className="img-fluid" src=" https://quintasresidencial.com/demo/fraccionamiento/QuintasResidencial/assets/images/semestral.png" alt="" />
                                  <div className="card-body border rounded">
                                    <h5 className="card-title text-center mb-2">Cantidad:</h5>
                                    <h2 className="card-text text-center mb-3" style={{ fontSize: "1.2rem" }}><strong>$ 3,113.00 MXP</strong> </h2>
                                    <div className="text-center"><a href="" className="btn btn-primary">Seleccionar</a></div>
                                  </div>
                                </div>
                              </div>


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
