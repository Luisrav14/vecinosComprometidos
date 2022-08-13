import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";

export const SaldoFavor = () => {
  return (
    <div className="wrapper">
      <SidebarUser />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="row">
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
                          <div class="col"> <form class="">
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
                          <div class="col">  <button type="submit" class="btn btn-success">
                            {" "}
                            <i class="FaAddressCard"></i> Buscar
                          </button></div>
                          <div class="col"> <form class="">

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

                            <div className="col">

                            </div>

                          </form>
                          </div>
                          <div class="col"> <button type="submit" class="btn btn-success">
                            {" "}
                            <i class="FaAddressCard"></i> Buscar
                          </button></div>
                        </div>













                        <div class="row">
                          <div class="col">


                          </div>
                          <div class="col">

                          </div>
                        </div>







                        <table class="table table-striped">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Concepto</th>
                              <th scope="col">Descripción</th>
                              <th scope="col">Monto</th>
                              <th scope="col">Estatús</th>
                              <th scope="col">acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Ingreso Extraordinario al mes de: Noviembre del 2021</td>
                              <td>Adeudo de Cuotas de Enero de 2011 a Septiembre de 2021 </td>
                              <td>$61,868.00 </td>
                              <td>Pendiente</td>
                              <td>
                                {" "}
                                <a class="btn btn-success btn-sm">Pagar</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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


        </main>
      </div>
    </div>
  );
};
