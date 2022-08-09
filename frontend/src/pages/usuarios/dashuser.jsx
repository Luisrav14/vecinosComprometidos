import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";


export const DashUser = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
              <strong>Micrositio</strong> inicio
            </h1>
          <div className="col-12">
          <img className="card-img-top" src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/backgroudGeneral.jpeg" alt="" />
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};