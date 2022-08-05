export const Index = () => {
    return (
      <>
        <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#40A4BC',}}>
        <a className="navbar-brand" href="http://quintasresidencial.com"><img className='logo' src='https://vecinoscomprometidos.com/images/VC%20LOGO_white_vecinos.png' style={{width:150}}/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse text-end" id="navbarNavDropdown">
              <ul className="navbar-nav text-end">
                <div className="text-end">
                  <a href="loging.php" className="btn btn-outline-light text-uppercase "> Mi cuenta</a>  
                </div>
              </ul>
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