import { Link } from "react-router-dom";
import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { BsPlusLg, BsEnvelope, BsPencilSquare,BsCalendar3, BsFillFileEarmarkFill, BsFillChatLeftTextFill, BsCardChecklist } from "react-icons/bs";

export const AsambleasAsistencia = () => {
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
              <h6>Asambleas
              </h6>
              <h1 id="titulo" style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
                PRUEBA DE ASAMBLEA


              </h1>
            </div>

            <section id="contact" class="contact">
              <div class="container" data-aos="fade-up">

                <div class=" section-title">

                 
                </div>

                <div class="row">

                  <div class="col-lg-8">
                  <div class="card">
      <div class="card-body mb-5">
       
       
        <p class="card-text text-center" style={{color:"#7B7B7B", fontSize: 20}}>Descripcion completa</p>
        <p class="card-text text-center"><BsCalendar3 color="#40a4bc" style={{ height: 50, fontSize: 30 }} /></p>
        <p class="card-text text-center" style={{color:"#40a4bc", fontSize: 15}}>Fecha: 20/09/2022</p>
      </div>
    </div>
                    

                  </div>

                  <div class="col-lg-4 mt-4 mt-lg-0">

                    <form>


                      <div class="tituform">
                        <h3>Confirmar asistencia</h3>
                      </div>
                      <div class="row">
                        <div class="form-group mt-3">
                          <input type="text" class="form-control" name="nombre" id="subject" placeholder="Nombre" required />
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="text" class="form-control" name="direccion" id="subject" placeholder="Direccion" required />
                      </div>
                      <div class="form-group mt-3">
                        <p>Selecciona el numero de asistentes</p>
                        <select class="form-select" aria-label="Default select example" name="asistencia">

                          <option selected value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </div>

                      <input type="hidden" name="asamid" value />

                      <div class="my-3">

                      </div>
                      <div class="text-center"><button type="submit" id="alertasus" name="boton" class="btn btn-success">Enviar</button></div>
                    </form>
                  </div>

                </div>

              </div>
            </section>


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
