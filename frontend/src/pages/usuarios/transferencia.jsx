import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";

export const Transferencia = () => {


  return (
    <div className="wrapper">
      <SidebarUser />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
              <h1><b>Pagos por transferencia</b></h1>
              <h5>En esta página podemos ver los pagos pendientes con nuestro metodo de pago seleccionado, podres pagar haciendo clic en el boton de la columna de acciones.</h5>
                <div className="card">
                
                  <div className="card-header">
               
                    <h5 className="card-title mb-0"> </h5>
                    
                    <div className=" rounded col-xl-12 col-md-12">


                      <div className="card-block mb-5 mt-5">

                        <div className="text-center">
                        
                          <div className="container mt-5">

                            <div>
                            <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Concepto</th>
      <th scope="col">Monto</th>
      <th scope="col">Estatús</th>
      <th scope="col">acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td> <a class="btn btn-success btn-sm"  >Pagar</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td> <a class="btn btn-success btn-sm"  >Pagar</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td> <a class="btn btn-success btn-sm"  >Pagar</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td> <a class="btn btn-success btn-sm"  >Pagar</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td> <a class="btn btn-success btn-sm"  >Pagar</a></td>
    </tr>
  </tbody>
</table>
                            
                            </div>
                            
                          </div>

                        </div>

                      </div>

                     
                    </div>


                  </div>


                  <div className="card-body">


                  </div>
                </div>
              </div>
              <div className="text-right">
                <img className="card-img-top"  style={{width:"10%"}} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/openpay-logo.png" alt="" />
                <img className="card-img-top"  style={{width:"10%"}} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/ssl.png" alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

