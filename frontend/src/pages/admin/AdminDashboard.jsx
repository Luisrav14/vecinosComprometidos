import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { BaseDatosGeneral } from "./BaseDatosGeneral";

export const AdminDashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
              <strong>Analytics</strong> Dashboard
            </h1>
            <div className="row"></div>
          </div>
        </main>
      </div>
    </div>
  );
};
