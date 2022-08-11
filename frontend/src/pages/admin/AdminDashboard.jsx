import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { useEffect } from "react";
import Swal from 'sweetalert2';
export const AdminDashboard = ({ children }) => {
  useEffect(()=>{
    mostrarAlerta();
  },[]);
  const mostrarAlerta=()=>{
    Swal.fire({
  
      icon: 'success',
      title: 'Inicio de sesion correcto',
      showConfirmButton: false,
      timer: 1500
    });

  }

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">{children}</div>
        </main>
      </div>
    </div>
  );
};
