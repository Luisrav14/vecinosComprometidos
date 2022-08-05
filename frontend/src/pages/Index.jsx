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

      
    </div>
      </>
    );
  };