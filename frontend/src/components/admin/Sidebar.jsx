//

export const Sidebar = () => {
  return (
    <nav className="nav flex-column border-right border-1 col-md-2 px-3 py-2" style={{ height: "100%" }}>
      <a className="nav-link active" aria-current="page" href="/admin/">
        Inicio
      </a>
      <a className="nav-link" href="/admin/general">
        Base de datos general
      </a>
      <a className="nav-link" href="/admin/cuotas">
        Cuotas de mantenimineto
      </a>
      <a className="nav-link" href="/admin/facturas">
        Facturas
      </a>
    </nav>
  );
};
