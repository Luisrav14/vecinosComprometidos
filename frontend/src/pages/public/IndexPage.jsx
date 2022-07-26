import { Link } from "react-router-dom";

import { infoFraccionamiento } from "../../global/infoFraccionamiento";


export const IndexPage = () => {
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
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav "></ul>

            <div className="col-12">
              <a id="ciudad" className="btn btn-outline-dark border border-0 text-uppercase" style={{ color: "white", fontSize: "18px" }}>
                Durango
              </a>
              <img id="imgtemp" src="https://quintasresidencial.com/animated/cloudy-day-1.svg" alt="" />
              <a id="temp" className="btn btn-outline-dark border border-0 text-uppercase" style={{ color: "white", fontSize: "18px" }}>
                26° c
              </a>
              <a id="fecha" className="btn btn-outline-dark border border-0 text-uppercase" style={{ color: "white", fontSize: "18px" }}>
                Viernes 05/08/2022
              </a>
              <a id="hora" className="btn btn-outline-dark border border-0 text-uppercase" style={{ color: "white", fontSize: "18px" }}>
                11:51:50
              </a>

              <span className="float-right">
                <Link to="/login" id="btncuenta" className="btn btn-blue text-uppercase " style={{ color: "white", fontSize: "18px", marginTop: "10%" }}>
                  {" "}
                  Mi cuenta
                </Link>
              </span>
            </div>
          </div>
        </nav>

        <div className="banner">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img id="banner1" className="w-100" src={infoFraccionamiento.banner1} />
              </div>
              <div className="carousel-item">
                <img id="banner2" className="w-100" src={infoFraccionamiento.banner2} />
              </div>
              <div className="carousel-item">
                <img id="banner3" className="w-100" src={infoFraccionamiento.banner3} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="container pt-5 pb-5">
          <div className="row pb-5">
            <div className="col"></div>
            <div className="col-12 pb-5 text-center">
              <h1 id="titulo">
                UN LUGAR PARA <strong>DISFRUTAR EN FAMILIA</strong>
                <hr />
              </h1>
              <h3 id="texto">Fraccionamiento privado, camellón central con área verde,</h3>
              <h3 id="texto">juegos infantiles y áreas deportivas.</h3>
              <h3 id="texto">Cuida tu casa, cuida tu familia.</h3>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row pb-5">
            <div className="col text-center pb-3">
              <h1 id="titulo-2">RECURSOS PARA COLONOS</h1>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col pb-1"></div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="col text-center pb-3">
            <h5 id="subTitulo">Servicios</h5>
          </div>
          <div className="row d-flex align-items-center justify-content-around mb-4">
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.cfe.mx/Pages/default.aspx" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.servicio1} alt="CFE" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="http://www.amd.gob.mx/amd/page.html" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.servicio2} alt="servicio2" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://telmex.com" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.servicio3} alt="servicio3" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.gasimperialdgo.com" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.servicio4} alt="servicio4" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.megacable.com.mx" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.servicio5} alt="servicio5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="col text-center pb-3">
            <h5 id="subTitulo">Supermercados</h5>
          </div>
          <div className="row d-flex align-items-center justify-content-around mb-4">
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.chedraui.com.mx" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.supermercado1} alt="supermercado1" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://alsuper.com" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.supermercado2} alt="supermercado2" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.samsclub.com" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.supermercado3} alt="supermercado3" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
              <div className="card">
                <a href="https://www.cityclub.com.mx" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.supermercado4} alt="supermercado4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row pb-5">
            <div className="col text-center pb-3"></div>
          </div>
          <div className="col text-center pb-3">
            <h5 id="subTitulo">Oficios</h5>
          </div>
          <div className="row d-flex align-items-center justify-content-around mb-4">
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://api.whatsapp.com/send?phone=526182280145" target="_blank">
                  <img className="img-fluid" src={infoFraccionamiento.oficio1} alt="Deepers Lava Carros" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://api.whatsapp.com/send?phone=526181347748">
                  <img className="img-fluid" src={infoFraccionamiento.oficio2} alt="Cerrajeros VIP" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://api.whatsapp.com/send?phone=526181496462">
                  <img className="img-fluid" src={infoFraccionamiento.oficio3} alt="Antonio Gallegos Plomero" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://api.whatsapp.com/send?phone=526181330663">
                  <img className="img-fluid" src={infoFraccionamiento.oficio4} alt="Manuel Plomero" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://api.whatsapp.com/send?phone=526182067292">
                  <img className="img-fluid" src={infoFraccionamiento.oficio5} alt="Alfonoso Jardinero" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row pb-5">
            <div className="col pb-1"></div>
          </div>
          <div className="col text-center pb-3">
            <h5 id="subTitulo">Noticieros</h5>
          </div>
          <div className="row d-flex align-items-center justify-content-around mb-4">
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://www.canal12dgo.com" target="_blank">
                  <img className="img-fluid" src="https://quintasresidencial.com/images/Mesa_de_trabajo_4_copia_3.png" alt="servicio9" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://canal10.com.mx/sitio/" target="_blank">
                  <img className="img-fluid" src="https://quintasresidencial.com/images/Mesa_de_trabajo_4_copia_4.png" alt="servicio10" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="http://www.lobotv.com.mx" target="_blank">
                  <img className="img-fluid" src="https://quintasresidencial.com/images/Mesa_de_trabajo_4_copia_5.png" alt="servicio11" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://envivodurango.com" target="_blank">
                  <img className="img-fluid" src="https://quintasresidencial.com/images/Mesa%20de%20trabajo%204%20copia%2014.png" alt="servicio12" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
              <div className="card">
                <a href="https://www.xhunestv.unes.edu.mx" target="_blank">
                  <img className="img-fluid" src="https://quintasresidencial.com/images/Mesa%20de%20trabajo%204%20copia%2015.png" alt="servicio4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <img className="img-fluid" src="https://quintasresidencial.com/images/bottom_emergencias.png" alt="" />
      </div>

      <div className="col-12 mt-5">
        <div className="col text-center pb-3 mb-5">
          <h5 id="subTitulo">Blog de noticias</h5>
        </div>
        <div className="card-group mb-5">
          <div className="card-noti">
            <img className="card-img-top" src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/blog/1659716959_mascotas.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Nuevas normas de convivencia con nuestras mascotas</h5>
              <p className="card-text">Censo canino</p>
            </div>
            <div className="card-footer1">
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
          <div className="card-noti">
            <img className="card-img-top" src="https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2022/06/tips.jpeg" alt="" />

            <div className="card-body">
              <h5 className="card-title">DEPOSITO EN GARANTIA PARA PROPIETARIOS QUE RENTAN SU CASA</h5>
              <p className="card-text">Deposito en Garantía</p>
            </div>
            <div className="card-footer1">
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
            </div>
          </div>
          <div className="card-noti">
            <img className="card-img-top" src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/blog/1642543017_6_consecuencias.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">6 Consecuencias si no se paga la cuota de mantenimiento</h5>
              <p className="card-text">Trae consecuencias específicas.</p>
            </div>
            <div className="card-footer1">
              <a href="#" className="btn btn-primary">
                Leer más
              </a>
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
                      <a href="/asambleasrecientes" target="_blank">
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
