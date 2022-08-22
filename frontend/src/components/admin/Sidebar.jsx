import { NavLink } from "react-router-dom";

import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useEffect, useState } from "react";

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
                <a data-bs-target="#ingresos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Inventario
                </a>
                <ul id="ingresos-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="/admin/inventarioactivo">
                      Activo
                    </a>
                    <a className="sidebar-link" href="/admin/inventariodescontinuado">
                      Descontinuado
                    </a>
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
                <a data-bs-target="#reportes-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Reportes
                </a>
                <ul id="reportes-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Pendientes
                    </a>
                    <a className="sidebar-link" href="#">
                      Resueltos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Convenios
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#informes-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Informes
                </a>
                <ul id="informes-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Informes financieros
                    </a>
                    <a className="sidebar-link" href="#">
                      Recursos humanos
                    </a>
                    <a className="sidebar-link" href="#">
                      Proveedores
                    </a>
                    <a className="sidebar-link" href="#">
                      Reglamentos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/admin">
                  Blogs
                </a>
              </li>
              <li className="sidebar-item">
                <a data-bs-target="#areas-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Áreas comúnes
                </a>
                <ul id="areas-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Calendario de reservación
                    </a>
                    <a className="sidebar-link" href="#">
                      Áreas reservadas
                    </a>
                  </li>
                </ul>
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
                <a data-bs-target="#areas-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Soporte
                </a>
                <ul id="areas-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Pendientes
                    </a>
                    <a className="sidebar-link" href="#">
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
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="#">
                        Ingresos cancelados
                      </a>
                    </li>
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
