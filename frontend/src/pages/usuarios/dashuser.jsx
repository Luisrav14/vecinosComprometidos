import React from 'react';
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
            <h1 className="mb-3 fw-bold">Bienvenido</h1>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0"> </h5>
                   
                    <img className="card-img-top" src=" https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/backgroudGeneral.jpeg"alt="" />
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