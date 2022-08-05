export const Index = () => {
    return (
      <>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#40A4BC',}}>
        <a className="navbar-brand" href="http://quintasresidencial.com"><img className='logo' src='https://vecinoscomprometidos.com/images/VC%20LOGO_white_vecinos.png' style={{width:150}}/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ">
                
              </ul>
              
              <div class="col-12">
              <a id="ubicacion" class="btn btn-outline-dark border border-0 text-uppercase" style={{color: "white",fontSize:'18px'}}>Durango</a>
              <img src='https://quintasresidencial.com/animated/cloudy-day-1.svg' alt="" />
              <a id="ubicacion" class="btn btn-outline-dark border border-0 text-uppercase" style={{color: "white",fontSize:'18px'}}>26 c</a>
              <a id="ubicacion" class="btn btn-outline-dark border border-0 text-uppercase" style={{color: "white",fontSize:'18px'}}>Viernes 05/08/200</a>
              <a id="ubicacion" class="btn btn-outline-dark border border-0 text-uppercase" style={{color: "white",fontSize:'18px'}}>11:51:50</a>
              
              
             <span className="float-right">
                <a href="/login" className="btn btn-blue text-uppercase " style={{color: "white",fontSize:'18px',marginTop:'10%'}}> Mi cuenta</a>  
                </span>
            </div>
        </div>
            
      </nav>
      <div className="banner">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className='hola' src='https://quintasresidencial.com/images/1.png' style={{width:'100%'}}/>
            </div>
              <div class="carousel-item">
                <img className='hola' src='https://quintasresidencial.com/images/2.png' style={{width:'100%'}}/>
              </div>
                <div class="carousel-item">
                  <img className='hola' src='https://quintasresidencial.com/images/3.png' style={{width:'100%'}}/>
                </div>
          </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
      <div class="container pt-5 pb-5">
    <div class="row pb-5">
      <div class="col"></div>
      <div class="col-12 pb-5 text-center">
        <h1 id="titulo">UN LUGAR PARA <strong>DISFRUTAR EN FAMILIA</strong></h1>
      
        <h3 id="texto">Fraccionamiento privado, camellón central con área verde,</h3>
        <h3 id="texto">juegos infantiles y áreas deportivas.</h3>
        <h3 id="texto">Cuida tu casa, cuida tu familia.</h3>
      </div>
    </div>
  </div>

  <div class="container pb-5">
    <div class="row pb-5">
      <div class="col text-center pb-3">
        <h1 id="titulo-2">RECURSOS PARA COLONOS</h1>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col pb-1"></div>
    </div>
    <div class="col text-center pb-3">
      <h5 id="subTitulo">Servicios</h5>
    </div>

      
    </div>
    <div class="row d-flex align-items-center justify-content-around mb-4">
         <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
                <a href="https://www.cfe.mx/Pages/default.aspx" target="_blank"><img class="img-fluid" src="https://quintasresidencial.com/images/Mesa_de_trabajo_5.png" alt="servicio5" /></a>
            </div>
         </div>
         
         <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
               <a href="http://www.amd.gob.mx/amd/page.html"><img class="img-fluid" target="_blank" src="images/Mesa_de_trabajo_5_copia.png" alt="servicio6" /></a>
            </div>
         </div>
  
  
        <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
               <a href="https://telmex.com" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4_copia.png" alt="servicio7" /></a>
            </div>
         </div>
         
         
         <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
               <a href="https://www.gasimperialdgo.com" target="_blank"><img class="img-fluid" src="images/iconos_Servicios_Gas.png" alt="servicio8" /></a>
            </div>
         </div>
         
         
         <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
               <a href="https://www.megacable.com.mx" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4_copia_6.png" alt="servicio12" /></a>
            </div>
         </div>
    </div>

  <div class="container pb-5">
    <div class="col text-center pb-3">
      <h5 id="subTitulo">Supermercados</h5>
    </div>
     <div class="row d-flex align-items-center justify-content-around mb-4">
        
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
           <div class="card">
        <a href="https://www.chedraui.com.mx" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4.png" alt="servicio4" /></a>
   
       </div>
       </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
        <a href="https://alsuper.com" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_1.png" alt="servicio1" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
            <div class="card">
        <a href="https://www.samsclub.com" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_2.png" alt="servicio2" /></a>
      </div>
       </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex">
          <div class="card">
        <a href="https://www.cityclub.com.mx" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_3.png" alt="servicio3" /></a>
      </div>
      </div>
    </div>
  </div>
  <div class="container pb-5">
    <div class="row pb-5">
      <div class="col text-center pb-3"></div>
    </div>
    <div class="col text-center pb-3">
      <h5 id="subTitulo">Oficios</h5>
    </div>
    <div class="row d-flex align-items-center justify-content-around mb-4">
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
            <div class="card">
        <a href="https://api.whatsapp.com/send?phone=526182280145" target="_blank"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 7.png" alt="Deepers Lava Carros" /></a>
      </div>
          </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://api.whatsapp.com/send?phone=526181347748"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 8.png" alt="Cerrajeros VIP" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
                    <div class="card">
        <a href="https://api.whatsapp.com/send?phone=526181496462"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 9.png" alt="Antonio Gallegos Plomero" /></a>
      </div>
       </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://api.whatsapp.com/send?phone=526181330663"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 10.png" alt="Manuel Plomero" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://api.whatsapp.com/send?phone=526182067292"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 11.png" alt="Alfonoso Jardinero" /></a>
      </div>
      </div>
    </div>
  </div>


  <div class="container pb-5">
    <div class="row pb-5">
      <div class="col pb-1"></div>
    </div>
    <div class="col text-center pb-3">
      <h5 id="subTitulo">Noticieros</h5>
    </div>
    <div class="row d-flex align-items-center justify-content-around mb-4">
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://www.canal12dgo.com" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4_copia_3.png" alt="servicio9" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://canal10.com.mx/sitio/" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4_copia_4.png" alt="servicio10" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="http://www.lobotv.com.mx" target="_blank"><img class="img-fluid" src="images/Mesa_de_trabajo_4_copia_5.png" alt="servicio11" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://envivodurango.com" target="_blank"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 14.png" alt="servicio12" /></a>
      </div>
      </div>
      <div class="col-lg-2 col-md-6 mt-10 mb-30 d-flex justify-content-around">
          <div class="card">
        <a href="https://www.xhunestv.unes.edu.mx" target="_blank"><img class="img-fluid" src="images/Mesa de trabajo 4 copia 15.png" alt="servicio4" /></a>
      </div>
      </div>
    </div>
  </div>
    </div>
      </>
    );
  };