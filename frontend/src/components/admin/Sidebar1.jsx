import { NavLink } from "react-router-dom";

import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useState } from "react";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("");

  const menuItems = [
    {
      catogory: "Base de Datos",
      icon: <FaDatabase />,
      subcategories: [
        { title: "Base de Datos general", path: "/admin", subcategory: null },
        { title: "Casas en renta", path: "/admin", subcategory: null },
        { title: "Lotes Valdíos", path: "/admin", subcategory: null },
        { title: "Información Personal", path: "/admin", subcategory: null },
        { title: "Suscriptores", path: "/admin", subcategory: null },
        { title: "Censo canino", path: "/admin", subcategory: null },
        { title: "Estadísticas", path: "/admin", subcategory: null },
        {
          title: "Inventario",
          path: null,
          subcategory: [
            {
              subtitle: "Activo",
              path: "/admin",
            },
            {
              subtitle: "Descontinuado",
              path: "/admin",
            },
          ],
        },
      ],
    },
    {
      catogory: "Operación",
      icon: <FaTable />,
      subcategories: [
        {
          title: "Asambleas",
          path: "/admin",
          subcategory: [
            {
              subtitle: "Asamblea",
              path: "/admin",
            },
            {
              subtitle: "Actas y acuerdos",
              path: "/admin",
            },
          ],
        },
        { title: "Acciones", path: "/admin", subcategory: null },
        { title: "Incidentes", path: "/admin", subcategory: null },
        {
          title: "Reportes",
          path: "/admin",
          subcategory: [
            {
              subtitle: "Pendientes",
              path: "/admin",
            },
            {
              subtitle: "Resueltos",
              path: "/admin",
            },
          ],
        },
        { title: "Convenios", path: "/admin", subcategory: null },
        {
          title: "Informes",
          path: "/admin",
          subcategory: [
            {
              subtitle: "Informes financieros",
              path: "/admin",
            },
            {
              subtitle: "Recursos humanos",
              path: "/admin",
            },
            {
              subtitle: "Proveedores",
              path: "/admin",
            },
            {
              subtitle: "Reglamentos",
              path: "/admin",
            },
          ],
        },
        { title: "Blogs", path: "/admin", subcategory: null },
        {
          title: "Áreas comúnes",
          path: null,
          subcategory: [
            {
              subtitle: "Calendario de reservación",
              path: "/admin",
            },
            {
              subtitle: "Áreas reservadas",
              path: "/admin",
            },
          ],
        },
        { title: "Encuestas", path: "/admin", subcategory: null },
        { title: "Ofertas", path: "/admin", subcategory: null },
        { title: "Medidores", path: "/admin", subcategory: null },
        {
          title: "Medidores",
          path: "/admin",
          subcategory: [
            {
              subtitle: "Pendientes",
              path: "/admin",
            },
            {
              subtitle: "Resueltos",
              path: "/admin",
            },
          ],
        },
      ],
    },
    {
      catogory: "Finanzas",
      icon: <BsGraphUp />,
      subcategories: [
        {
          title: "Estados de cuenta",
          path: "/admin",
          subcategory: null,
        },
        {
          title: "Ingresos",
          path: null,
          subcategory: [
            {
              subtitle: "Coutas de mantenimiento",
              path: "/admin",
            },
            {
              subtitle: "Extraordinarios",
              path: null,
              subcategory3: [
                {
                  subtitle: "Pagados",
                  path: "/admin",
                },
                { subtitle: "Pendientes", path: "/admin" },
              ],
            },
            {
              subtitle: "Resumen de ingresos",
              path: "/admin",
            },
            {
              subtitle: "Pagos realizados",
              path: "/admin",
            },
            {
              subtitle: "Saldo a favor",
              path: null,
              subcategory3: [
                { subtitle: "Por aplicar", path: "/admin" },
                { subtitle: "Aplicados", path: "/admin" },
              ],
            },
            {
              subtitle: "Ingresos cancelados",
              path: "/admin",
            },
          ],
        },
        {
          title: "Egresos",
          path: null,
          subcategory: [
            {
              subtitle: "Resumen de egresos",
              path: "/admin",
            },
            {
              subtitle: "Egresos cancelados",
              path: "/admin",
            },
            {
              subtitle: "Descuentos y reembolsos",
              path: "/admin",
            },
          ],
        },
        {
          title: "Morosidad",
          path: null,
          subcategory: [
            {
              subtitle: "Monto adeudado",
              path: "/admin",
            },
            {
              subtitle: "Propiedades morosas",
              path: "/admin",
            },
          ],
        },
        { title: "Facturas", path: "/admin", subcategory: null },
        {
          title: "Depósitos en garantía",
          path: null,
          subcategory: [
            {
              subtitle: "Agregar depósitos",
              path: "/admin",
            },
            {
              subtitle: "Depósitos devueltos",
              path: "/admin",
            },
          ],
        },
        { title: "Cotizaciones", path: "/admin", subcategory: null },
        { title: "Historiales de pago", path: "/admin", subcategory: null },
      ],
    },
    {
      catogory: "Control de Accesos",
      icon: <FaAddressCard />,
      subcategories: [
        {
          title: "Vehicular",
          path: null,
          subcategory: [
            {
              subtitle: "Entrada",
              path: null,
              subcategory3: [
                {
                  subtitle: "Colonos",
                  path: "/admin",
                },
                { subtitle: "Visitantes", path: "/admin" },
              ],
            },
            {
              subtitle: "Salida",
              path: null,
              subcategory3: [
                { subtitle: "Colonos", path: "/admin" },
                { subtitle: "Visitantes", path: "/admin" },
              ],
            },
          ],
        },
        {
          title: "Peatonal",
          path: "/admin",
          subcategory: null,
        },
        {
          title: "Pin de acceso",
          path: "/admin",
          subcategory: null,
        },
        {
          title: "Trjetas de acceso",
          path: "/admin",
          subcategory: null,
        },
      ],
    },
  ];

  return (
    <nav id="sidebar" className={`sidebar ${showSidebar}`}>
      <div className="sidebar-content">
        <a className="sidebar-brand mb-1" href="/admin">
          <span className="align-middle">
            <img className="w-75 ml-3" src={infoFraccionamiento.logo} />
          </span>
        </a>

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
                    <a className="sidebar-link" href="#">
                      Activo
                    </a>
                    <a className="sidebar-link" href="#">
                      Descontinuado
                    </a>
                  </li>
                </ul>
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
                <a data-bs-target="#asambleas-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Asambleas
                </a>
                <ul id="asambleas-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Asamblea
                    </a>
                    <a className="sidebar-link" href="#">
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
                <a data-bs-target="#ingresos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Reportes
                </a>
                <ul id="ingresos-3" className="sidebar-dropdown list-unstyled collapse">
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
                <a data-bs-target="#ingresos-3" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                  Three Levels
                </a>
                <ul id="ingresos-3" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <a data-bs-target="#ingresos-3-1" data-bs-toggle="collapse" className="sidebar-link collapsed" aria-expanded="false">
                      Item 1
                    </a>
                    <ul id="ingresos-3-1" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Item 1
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                          Item 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                      Item 2
                    </a>
                  </li>
                </ul>
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
