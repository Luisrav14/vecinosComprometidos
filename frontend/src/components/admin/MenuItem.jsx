import { NavLink } from "react-router-dom";

export const MenuItem = ({ item, itemKey }) => {
  return (
    <li className="sidebar-item text-light active my-2">
      <a data-bs-target={`#${itemKey}`} data-bs-toggle="collapse" className="sidebar-link collapsed">
        <i className="align-middle" data-feather="layout"></i>
        <span className="align-middle">
          {item.icon} {item.category}
        </span>
      </a>
      <ul id={itemKey} className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
        <li className="sidebar-item">
          <NavLink to={item.path} className="sidebar-link">
            {item.category}
          </NavLink>
        </li>
      </ul>
    </li>
  );
};
