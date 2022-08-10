import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { Sidebar } from "../../components/admin/Sidebar";
<<<<<<< Updated upstream
=======
import { SidebarUser } from '../../components/admin/SidebarUser';
>>>>>>> Stashed changes

import ReactDOM from "react-dom";

const columnas = [
  { title: "id", field: "id" },
  { title: "nombre", field: "nombre" },
  { title: "apellido", field: "apellido" },
];
const data = [{ id: 1, nombre: "ernesto", apellido: "amaya" }];

export const DashUser = () => {
  return (
    <div className="wrapper">
      <SidebarUser />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="mb-3 fw-bold">Bienvenido</h1>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0"> </h5>
<<<<<<< Updated upstream

                    <img className="card-img-top" src=" https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/backgroudGeneral.jpeg" alt="" />
=======
                   
                  <img className="card-img-top" src=" https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/backgroudGeneral.jpeg"alt="" />
                
>>>>>>> Stashed changes
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
