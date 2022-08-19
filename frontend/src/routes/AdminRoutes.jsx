import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard, AgregarPropietario, BaseDatosGeneral, CuotasMantenimiento, EditarPropietario, ResumenInformacion } from "../pages";

export const AdminRoutes = () => {
  return (
    <>
      <AdminDashboard>
        <Routes>
          <Route path="/" element={<ResumenInformacion />} />
          <Route path="/general" element={<BaseDatosGeneral />} />
          <Route path="/agregar-propietario" element={<AgregarPropietario />} />
          <Route path="/editar-propietario" element={<EditarPropietario />} />
          <Route path="/cuotas-mantenimiento" element={<CuotasMantenimiento />} />
        </Routes>
      </AdminDashboard>
    </>
  );
};
