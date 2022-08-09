//

export const Sidebar = () => {
  return (
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="/admin">
          <span class="align-middle">Dashboard</span>
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-item active">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Resúmen de información</span>
            </a>
          </li>
          <li class="sidebar-header">Operaciones</li>

<li class="sidebar-item">
						<a data-bs-target="#pages" data-bs-toggle="collapse" class="sidebar-link collapsed">
							<i class="align-middle" data-feather="layout"></i> <span class="align-middle">Pages</span>
						</a>
						<ul id="pages" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
							<li class="sidebar-item"><a class="sidebar-link" href="pages-settings.html">Settings</a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="pages-projects.html">Projects <span
										class="sidebar-badge badge bg-primary">Pro</span></a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="pages-clients.html">Clients <span
										class="sidebar-badge badge bg-primary">Pro</span></a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="pages-pricing.html">Pricing <span
										class="sidebar-badge badge bg-primary">Pro</span></a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="pages-chat.html">Chat <span
										class="sidebar-badge badge bg-primary">Pro</span></a></li>
							<li class="sidebar-item"><a class="sidebar-link" href="pages-blank.html">Blank Page</a></li>
						</ul>
					</li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="user"></i> <span class="align-middle">Base de datos general</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" hrefadmin="pages-/">
              <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">Sign In</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" hrefadmin="pages-/">
              <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Sign Up</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">Blank</span>
            </a>
          </li>

          <li class="sidebar-header">Finanzas</li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="square"></i> <span class="align-middle">Buttons</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Forms</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Cards</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="align-left"></i> <span class="align-middle">Typography</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Icons</span>
            </a>
          </li>

          <li class="sidebar-header">Control de accesos</li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Charts</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/admin">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Maps</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
