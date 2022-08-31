import { infoFraccionamiento } from "../../global/infoFraccionamiento";
import { FaDatabase, FaTable, FaAddressCard } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    category: "Base de Datos",
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
    category: "Operación",
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
    category: "Finanzas",
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
    category: "Control de Accesos",
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

export const Sidebar = ({ show = true }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setShowSidebar(show);
  }, [show]);

  return (
    <nav id="sidebar" className={`sidebar ${showSidebar ? "" : "d-none"} `}>
      <div className="sidebar-content">
        <a className="sidebar-brand mb-1" href="/admin">
          <span className="align-middle">
            <img className="w-75 ml-3" src={infoFraccionamiento.logo} />
          </span>
        </a>

        <button className="btn btn-primary mx-5" onClick={handleSidebar}>
          Hide/Show
        </button>

        <ul className="sidebar-nav">
          {menuItems.map((item) => {
            i++;
            return (
              <li className="sidebar-item text-light active my-2">
                <a data-bs-target={`#${i}`} data-bs-toggle="collapse" className="sidebar-link collapsed">
                  <i className="align-middle" data-feather="layout"></i>
                  <span className="align-middle">
                    {item.icon} {item.category}
                  </span>
                </a>
                <ul id={i} className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                  <li className="sidebar-item">
                    <NavLink to={item.category} className="sidebar-link">
                      {item.category}
                    </NavLink>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
