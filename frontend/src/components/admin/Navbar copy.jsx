import { FaBars, FaPowerOff } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary pl-md-0 bg-primary">
      <div className="container-fluid">
        <div className="text-light">
          <button className="btn btn-primary">
            <FaBars />
          </button>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link disabled"> </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="dropdown mr-3">
              <button class="btn btn-outline-primary text-light dropdown-toggle px-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Usuario{" "}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary">
              <FaPowerOff />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
