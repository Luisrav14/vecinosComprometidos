import { Link } from "react-router-dom";
import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillFileEarmarkFill, BsFillChatLeftTextFill, BsCardChecklist } from "react-icons/bs";

export const AsambleasRecientes = () => {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light py-1" style={{ backgroundColor: "#40A4BC", zIndex: "99" }}>
          <Link className="navbar-brand" to="/">
            <img className="logo" src={infoFraccionamiento.logo} style={{ width: 150 }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </nav>



        <div className="container pt-5 pb-5">
          <div className="row pb-5">
            <div className="col"></div>
            <div className="col-12  ">
              <h1 id="titulo" style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
                ASAMBLEAS
              </h1>
            </div>
            <div class="container" data-aos="fade-up">
              <div class="row" data-aos="fade-up" data-aos-delay="200">
                <div class="card">



                  <div class="row">
                    <div class="col-1 mb-3 mt-3">

                      <BsCardChecklist style={{ height: 50, fontSize: 40 }} />

                    </div>

                    <div class="col">
                      <h5 class="card-title mb-3 mt-3">Asambleas registradas</h5>
                      <p class="card-text">3 asambleas registradas</p>

                    </div>

                  </div>

                </div>

                <div class="col-12">
                  <div class="card-deck">
                    <div class="card">

                      <div class="card-body">
                        <h5 class="card-title">prueba de asamblea</h5>
                        <p class="card-text">Descripcion de la asamblea.</p>
                        <small class="text-muted">Fecha: 2022-07-01</small>
                      </div>
                      <div class="card-footer">
                        
                        <Link to="../asambleasasistencia" className="btn btn-primary">
                <BsPlusLg /> Ver mas
              </Link>
                      </div>
                    </div>


                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">prueba de asamblea</h5>
                        <p class="card-text">Descripcion de la asamblea.</p>
                        <small class="text-muted">Fecha: 2022-07-01</small>
                      </div>
                      <div class="card-footer">
                      <Link to="../asambleasasistencia" className="btn btn-primary">
                <BsPlusLg /> Ver mas
              </Link>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">prueba de asamblea</h5>
                        <p class="card-text">Descripcion de la asamblea.</p>
                        <small class="text-muted">Fecha: 2022-07-01</small>
                      </div>
                      <div class="card-footer">
                      <Link to="../asambleasasistencia" className="btn btn-primary">
                <BsPlusLg /> Ver mas
              </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>




      <div className="col-12">
        <img className="img-fluid" src={infoFraccionamiento.bannerinferior} alt="" />
      </div>

      <footer className="col-12 page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">Dirección</h5>
              <p> {infoFraccionamiento.direccion} </p>
            </div>
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">Contacto</h5>
              <strong>
                <span>
                  <a href={`mailto:${infoFraccionamiento.correo}`} target="_blank">
                    {infoFraccionamiento.correo}
                  </a>
                </span>
              </strong>{" "}
              <br></br>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase"> Legal</h5>

              <ul className="list-unstyled">
                <li>
                  <strong>
                    <span>
                      <a href="assets/pdf/Aviso-Privacidad.pdf" target="_blank">
                        Políticas de Privacidad
                      </a>
                    </span>
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>
                      <a href="assets/pdf/Terminos-Condiciones.pdf" target="_blank">
                        Terminos y Condiciones
                      </a>
                    </span>
                  </strong>
                </li>
                <li>
                  <strong>
                    <span>
                      <a href="fraccionamiento/QuintasResidencial/asambleastodas.php" target="_blank">
                        Asambleas
                      </a>
                    </span>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © Copyright {infoFraccionamiento.nombre} 2022. All Rights Reserved <br></br>
        </div>
        <div className="container mt-2">
          <div className="row ">
            <div className="col-md-3 col-sm-12">
              <p className="mt-3 text-dark text-center">Tu dinero siempre seguro</p>
            </div>
            <div className="col-md-9 col-sm-12 m-0">
              <img className="img-fluid" src="https://quintasresidencial.com/images/pieLogos.png" alt="servicio12" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
