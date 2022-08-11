import { NavLink } from "react-router-dom";

export const MenuItem = () => {
  return (
    <li className="sidebar-item text-light active my-2" key={i}>
      <a data-bs-target={`#${i}`} data-bs-toggle="collapse" className="sidebar-link collapsed">
        <i className="align-middle" data-feather="layout"></i>
        <span className="align-middle">
          {item.icon} {item.category}
        </span>
      </a>
      <ul id={i} className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
        <li className="sidebar-item">
          <NavLink to={item.path} className="sidebar-link">
            Base de Datos general
          </NavLink>
        </li>
      </ul>
    </li>
  );
};
