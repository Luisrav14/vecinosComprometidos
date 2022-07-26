import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsGraphUp } from "react-icons/bs";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";

import { infoFraccionamiento } from "../../../global/infoFraccionamiento";

export const Sidebar = ({ show = true }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setShowSidebar(show);
  }, [show]);

  return (
    <nav id="sidebar" className={`sidebar ${showSidebar ? "" : "d-none"} `}>
      <div className="sidebar-content">
        <NavLink className="sidebar-brand mb-1" to="/admin">
          <span className="align-middle">
            <img className="w-75 ml-3" src={infoFraccionamiento.logo} />
          </span>
        </NavLink>
        <ul className="sidebar-nav">
          <li className="sidebar-item text-light active my-2">
            <a data-bs-target="#db" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>
              <span className="align-middle">
                <FaDatabase /> Base de Datos
              </span>
            </a>
            <ul id="db" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <NavLink to="/admin/general" className="sidebar-link">
                  Base de Datos general
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/admin/casas-renta">
                  Casas en renta
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/admin/lotes-baldios">
                  Lotes Baldíos
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/admin/informacion-personal">
                  Información personal
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Suscriptores
                </a>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/admin/censo-animal">
                  Censo canino
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/admin/estadisticas">
                  Estadísticas
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#ingresos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Inventario
                </a>
                <ul id="ingresos-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <NavLink className="sidebar-link" to="/admin/inventarioactivo">
                      Activo
                    </NavLink>
                    <NavLink className="sidebar-link" to="/admin/inventariodescontinuado">
                      Descontinuado
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light active my-2">
            <a data-bs-target="#operacion" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <FaTable /> Operación
              </span>
            </a>
            <ul id="operacion" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a data-bs-target="#asambleas-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Asambleas
                </a>
                <ul id="asambleas-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/asambleas">
                      Asamblea
                    </a>
                    <a className="sidebar-link" href="/admin/anunciosacuerdos">
                      Actas y acuerdos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/acciones">
                  Acciones
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/incidentes">
                  Incidentes
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#reportes-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Reportes
                </a>
                <ul id="reportes-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/reportespendientes">
                      Pendientes
                    </a>
                    <a className="sidebar-link" href="/admin/reportesresueltos">
                      Resueltos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/convenios">
                  Convenios
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#informes-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Informes
                </a>
                <ul id="informes-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/informes-financieros">
                      Informes financieros
                    </a>
                    <a className="sidebar-link" href="/admin/recursos-humanos">
                      Recursos humanos
                    </a>
                    <a className="sidebar-link" href="/admin/proveedores">
                      Proveedores
                    </a>
                    <a className="sidebar-link" href="/admin/reglamentos">
                      Reglamentos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/blogs">
                  Blogs
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#areas-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Áreas comúnes
                </a>
                <ul id="areas-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/calendario-reservaciones">
                      Calendario de reservación
                    </a>
                    <a className="sidebar-link" href="/admin/areas-reservadas">
                      Áreas reservadas
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/encuestasadm">
                  Encuestas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/ofertas">
                  Ofertas
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin/medidores">
                  Medidores
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#areas-4" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Soporte
                </a>
                <ul id="areas-4" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/soporte-pendientes">
                      Pendientes
                    </a>
                    <a className="sidebar-link" href="/admin/soporte-resueltos">
                      Resueltos
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="sidebar-item text-light active my-2">
            <a data-bs-target="#finanzas" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                {" "}
                <BsGraphUp /> Finanzas
              </span>
            </a>
            <ul id="finanzas" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="estados-cuenta">
                  Estados de cuenta
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#cuotasm-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Ingresos
                </a>
                <ul id="cuotasm-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <NavLink className="sidebar-link" to="cuotas-mantenimiento">
                      Cuotas de mantenimiento
                    </NavLink>
                  </li>
                  <li className="sidebar-item">
                    <a data-bs-target="#cuotasm-3-1" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                      Extraordinarios
                    </a>
                    <ul id="cuotasm-3-1" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Pagados
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Pendientes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Resumen de ingresos
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Pagos realizados
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a data-bs-target="#cuotasm-3-2" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                      Saldo a favor
                    </a>
                    <ul id="cuotasm-3-2" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Por aplicar
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Aplicados
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Ingresos cancelados
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#egresos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Egresos
                </a>
                <ul id="egresos-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Resumen de egresos
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Egresos cancelados
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Descuentos y reembolsos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#morosidad-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Morosidad
                </a>
                <ul id="morosidad-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Monto adeudado
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Propiedades morosas
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Facturas
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#depositos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Depósitos en garantía
                </a>
                <ul id="depositos-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Agregar depósitos
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Depósitos devueltos
                    </a>
                  </li>
                </ul>
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

          <li className="sidebar-item text-light active my-2">
            <a data-bs-target="#control" data-bs-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="layout"></i>{" "}
              <span className="align-middle">
                <FaAddressCard /> Control de accesos
              </span>
            </a>
            <ul id="control" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a data-bs-target="#vehicular-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Vehicular
                </a>
                <ul id="vehicular-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a data-bs-target="#vehicular-3-1" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                      Entrada
                    </a>
                    <ul id="vehicular-3-1" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Colonos
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Visitantes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a data-bs-target="#vehicular-3-2" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                      Salida
                    </a>
                    <ul id="vehicular-3-2" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Colonos
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Visitantes
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
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
