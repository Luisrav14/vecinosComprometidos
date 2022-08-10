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
            <h1 className="mb-3 fw-bold">Resúmen Informativo</h1>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Empty card</h5>
                  </div>
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
