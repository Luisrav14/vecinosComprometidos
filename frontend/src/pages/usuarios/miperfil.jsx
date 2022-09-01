import { BsPencilSquare } from "react-icons/bs";

export const MiPerfil = () => {
  return (
    <>
      <div className="col-12">
        <div className="card">
          <div className="card-header mb-0">
            <div className=" rounded col-xl-12 col-md-12">
              <div className="card-block mb-5 mt-3">
                <div className="card-block ">
                  <div className="row d-flex justify-content-around">
                    <div className="text-center mb-5">
                      <h3>Datos del propietario</h3>
                    </div>
                    <form>
                      <div class="form-group">
                        <div class="row mb-5">
                          <div class="col">
                            <label htmlFor="example1">Nombre Completo</label> <br></br>
                            <input type="text" />
                          </div>
                          <div class="col">
                            <label htmlFor="example1">Correo</label>
                            <br></br>
                            <input type="text" />
                          </div>
                          <div class="col">
                            <label htmlFor="example1">Telefono</label>
                            <br></br>
                            <input type="text" />
                          </div>
                        </div>
                        <div class="row mb-5">
                          <div class="col">
                            <label htmlFor="example1">Contraseña</label>
                            <br></br>
                            <input type="text" />
                          </div>
                          <div class="col">
                            <label htmlFor="example1">Celular</label>
                            <br></br>
                            <input type="text" />
                          </div>
                          <div class="col">
                            <label htmlFor="example1"></label>
                            <br></br>
                            <input type="text" hidden />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <button class="btn btn-warning mx-2">
                              Editar <BsPencilSquare />
                            </button>
                            ,
                          </div>
                        </div>
                      </div>
                    </form>
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
