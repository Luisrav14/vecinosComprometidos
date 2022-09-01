import { useState } from "react";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle" onClick={handleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse mr-4">
        <ul className="navbar-nav navbar-align">
         
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square align-middle">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
            </a>
            
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administración1
            </a>
            <div className="dropdown-menu" aria-labelledby="resourcesDropdown">
              <a className="dropdown-item" href="https://adminkit.io/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home align-middle me-1">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Fraccionamiento
              </a>
              <a className="dropdown-item" href="https://adminkit.io/docs/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open align-middle me-1">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Liquidaciones
              </a>
              <hr />
              <a className="dropdown-item" href="/login" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit align-middle me-1">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>{" "}
                Cerrar sesión
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
