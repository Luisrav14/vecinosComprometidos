import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BiChalkboard } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar" style={{ height: "100%" }}>
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand bg-primary mb-1" href="/admin">
          <span className="align-middle">
            <img className="w-75 ml-3" src={infoFraccionamiento.logo} />
          </span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-item text-light active my-2">
            <a data-bs-target="#db" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaDatabase /> Base de Datos
              </span>
            </a>
            <ul id="db" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Base de Datos general
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Casas en renta
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Lotes Valdíos
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Información personal
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Suscriptores
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Censo canino
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Estadísticas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Inventario
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light active my-2 rounded rounded-1">
            <a data-bs-target="#operacion" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaTable /> Operación
              </span>
            </a>
            <ul id="operacion" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Asambleas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Acciones
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Incidentes
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Reportes
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Convenios
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Informes
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Blogs
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Áreas comúnes
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Encuestas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Ofertas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Medidores
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Soporte
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light active my-2 rounded rounded-1">
            <a data-bs-target="#finanzas" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <BsGraphUp /> Finanzas
              </span>
            </a>
            <ul id="finanzas" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Estados de cuenta
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Ingresos
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Egresos
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Morosidad
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Facturas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Depósitos en garantía
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Cotizaciones
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Historiales de pago
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light active my-2 rounded rounded-1">
            <a data-bs-target="#control" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                <FaAddressCard /> Control de accesos
              </span>
            </a>
            <ul id="control" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Vehicular
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Peatonal
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Pin de acceso
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Tarjetas de acceso
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
