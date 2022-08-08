//

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light border-bottom border-1">
      <div className="container-fluid">
        <a className="navbar-brand">Dashboard</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <a href="/" className="btn btn-outline-success">
            Salir
          </a>
        </form>
      </div>
    </nav>
  );
};
