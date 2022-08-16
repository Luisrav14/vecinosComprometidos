import React from "react";

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
