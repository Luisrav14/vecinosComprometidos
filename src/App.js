import logo from './logo2.png';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: 'green',}}>
        <a className="navbar-brand" href="http://quintasresidencial.com"><img className='logo' src='https://quintasresidencial.com/images/Logo-quintas-header.png' style={{width:120}}/></a>
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

      <div class="banner">
      <img className='logo3' src='https://quintasresidencial.com/images/banner_index.png' style={{width:1400}}/>
      
      </div>
    </div>

    
  );
}

export default App;
