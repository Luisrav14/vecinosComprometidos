import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
import { BaseDatosGeneral } from "./BaseDatosGeneral";

export const AdminDashboard = () => {
  return (
    <>
      <div className="row">
        <Navbar />
        <Sidebar />
        <div className="col-md-10">
          <div className="container py-3">
            <Routes>
              <Route path="/admin/general" render={<BaseDatosGeneral />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
