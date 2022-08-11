import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { useSidebar } from "../../hooks/useSidebar";
import DataTable from "react-data-table-component";

export const AdminDashboard = ({ children }) => {
  const { handleSidebar, showSidebar } = useSidebar();

  const columns = ["name", "id", "title"];
  const data = [{ name: "name", id: "id", title: "title" }];

  return (
    <div className="wrapper">
      <Sidebar show={showSidebar} />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <DataTable />
          </div>
        </main>
      </div>
    </div>
  );
};
