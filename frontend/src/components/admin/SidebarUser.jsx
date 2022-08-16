import { useEffect, useState } from "react";
import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsFillTreeFill, BsFillHandIndexThumbFill, BsFillPieChartFill } from "react-icons/bs";

export const SidebarUser = ({ show = true }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setShowSidebar(show);
  }, [show]);
  return (
    <nav id="sidebar" className={`sidebar ${showSidebar ? "" : "d-none"} `}>
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand mb-1" href="/dashboard">
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
                <a className="sidebar-link" href="/dashboard/suscripcion">
                  Suscripción
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/dashboard/efectivo">
                  Pago en efectivo
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/dashboard/transferencia">
                  Transferencia Bancaria
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/dashboard/pagospendientes">
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
                <a className="sidebar-link" href="/dashboard/saldofavor">
                  Saldo a favor
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/dashboard/historialpagos">
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
                <BsFillTreeFill />
                Espacios Comunes
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
