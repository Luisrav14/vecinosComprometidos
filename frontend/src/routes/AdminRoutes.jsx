import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard, AgregarPropietario, BaseDatosGeneral, ResumenInformacion } from "../pages";

export const AdminRoutes = () => {
  return (
    <>
      <AdminDashboard>
        <Routes>
          <Route path="/" element={<ResumenInformacion />} />
          <Route path="/general" element={<BaseDatosGeneral />} />
          <Route path="/agregar-propietario" element={<AgregarPropietario />} />
        </Routes>
      </AdminDashboard>
    </>
  );
};
