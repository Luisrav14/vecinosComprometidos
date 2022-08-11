import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { useSidebar } from "../../hooks/useSidebar";

export const AdminDashboard = ({ children }) => {
  const { handleSidebar, showSidebar } = useSidebar();


  

  return (
    <div className="wrapper">
      <Sidebar show={showSidebar} />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            
          </div>
        </main>
      </div>
    </div>
  );
};
