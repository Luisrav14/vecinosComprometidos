import React from "react";
import { Route, Routes } from "react-router-dom";




import { AdminDashboard, AgregarPropietario, BaseDatosGeneral, CuotasMantenimiento, CuotaTotalPagado, CuotaTotalPendiente, CuotaTotalRecaudar, EditarPropietario, ResumenInformacion, Asamblea, EstadosDeCuenta, AgregarAsamblea,AnunciosAcuerdos } from "../pages";


export const AdminRoutes = () => {
  return (
    <>
      <AdminDashboard>
        <Routes>
           {/* RUTAS BASE DE DATOS */}
          <Route path="/" element={<ResumenInformacion />} />
          <Route path="/general" element={<BaseDatosGeneral />} />
          <Route path="/agregar-propietario" element={<AgregarPropietario />} />
          <Route path="/editar-propietario" element={<EditarPropietario />} />
          <Route path="/cuotas-mantenimiento" element={<CuotasMantenimiento />} />
          <Route path="/cuotas-mantenimiento/recaudar" element={<CuotaTotalRecaudar />} />
          <Route path="/cuotas-mantenimiento/pendiente" element={<CuotaTotalPendiente />} />
          <Route path="/cuotas-mantenimiento/pagado" element={<CuotaTotalPagado />} />


          {/* RUTAS OPERACIONES */}
          <Route path="/asambleas" element={<Asamblea />} />
          <Route path="/agregar-asamblea" element={<AgregarAsamblea />} />
          <Route path="/anunciosacuerdos" element={<AnunciosAcuerdos />} />


          <Route path="/estados-cuenta" element={<EstadosDeCuenta />} />

        </Routes>
      </AdminDashboard>
    </>
  );
};
