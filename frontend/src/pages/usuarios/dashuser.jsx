import React, { useEffect } from "react";
import Swal from "sweetalert2";

import { UsuariosDashboard } from "./UsuariosDashboard";

export const DashUser = () => {
  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
      icon: "success",
      title: "Inicio de sesion correcto",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0"> </h5>

          <h1 className="mb-3 fw-bold">Bienvenido</h1>
          <img className="card-img-top" src=" https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/backgroudGeneral.jpeg" alt="" />
        </div>

        <div className="card-body"></div>
      </div>
    </>
  );
};
