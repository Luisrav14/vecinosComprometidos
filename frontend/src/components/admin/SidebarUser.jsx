import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsGraphUp,BsFillTreeFill,BsFillHandIndexThumbFill,BsFillPieChartFill } from "react-icons/bs";



export const SidebarUser = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand mb-1" href="/admin">
          <span className="align-middle">
            <img className="w-75 ml-3" src={infoFraccionamiento.logo} />
          </span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-item text-light  my-2">
            <a data-bs-target="#db" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaDatabase /> Métodos de Pago
              </span>
            </a>
            <ul id="db" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
            <li className="sidebar-item">
                <a className="sidebar-link" href="/suscripcion">
                Suscripción
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/efectivo">
                Pago en efectivo
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/transferencia">
                Transferencia Bancaria
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/pagospendientes">
                Pagos Extraordinarios
                </a>
              </li>
             
            </ul>
          </li>

          <li className="sidebar-item text-light   my-2 rounded rounded-1">
            <a data-bs-target="#operacion" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaTable /> Mis Pagos
              </span>
            </a>
            <ul id="operacion" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a className="sidebar-link" href="/saldofavor">
                Saldo a favor
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                Historial de pagos
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light  my-2 rounded rounded-1">
            <a data-bs-target="#finanzas" data-bs-toggle="" className="sidebar-link ">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaAddressCard /> Facturas
              </span>
            </a>
          </li>

          <li className="sidebar-item text-light  my-2 rounded rounded-1">
            <a data-bs-target="#finanzas" data-bs-toggle="" className="sidebar-link ">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <BsFillPieChartFill /> Encuestas
              </span>
            </a>
          </li>


          <li className="sidebar-item text-light  my-2 rounded rounded-1">
            <a data-bs-target="#finanzas" data-bs-toggle="" className="sidebar-link ">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <BsFillHandIndexThumbFill /> Acciones
              </span>
            </a>
          </li>

          <li className="sidebar-item text-light my-2 rounded rounded-1">
            <a data-bs-target="#finanzas" data-bs-toggle="" className="sidebar-link ">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <BsFillTreeFill />Espacios Comunes
              </span>
            </a>
          </li>


        </ul>
      </div>
    </nav>
  );
};
