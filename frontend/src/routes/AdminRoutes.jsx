import React from "react";
import { Route, Routes } from "react-router-dom";

import { AdminDashboard, AgregarPropietario, BaseDatosGeneral,
   CuotasMantenimiento, CuotaTotalPagado, CuotaTotalPendiente,
    CuotaTotalRecaudar, EditarPropietario, ResumenInformacion, 
    Asamblea, EstadosDeCuenta, AgregarAsamblea, AnunciosAcuerdos, 
    InventarioActivo, InventarioDescontinuado, AgregarAnuncios,
     AccionesMod, CasasRenta, LotesBaldios, Inventario, Incidentes, AgregarIncidente,Reportes, ReportesResueltos, Convenios, AgregarConvenio } from "../pages";

export const AdminRoutes = () => {
  return (
    <>
      <AdminDashboard>
        <Routes>
          {/* RUTAS BASE DE DATOS */}
          <Route path="/" element={<ResumenInformacion />} />
          <Route path="/general" element={<BaseDatosGeneral />} />
          <Route path="/casas-renta" element={<CasasRenta />} />
          <Route path="/lotes-baldios" element={<LotesBaldios />} />
          <Route path="/agregar-propietario" element={<AgregarPropietario />} />
          <Route path="/editar-propietario" element={<EditarPropietario />} />
          <Route path="/inventarioactivo" element={<InventarioActivo />} />
          <Route path="/inventariodescontinuado" element={<InventarioDescontinuado />} />
          <Route path="/inventario/:categoria" element={<Inventario />} />
          <Route path="/acciones" element={<AccionesMod />} />

          {/* RUTAS OPERACIONES */}
          <Route path="/asambleas" element={<Asamblea />} />
          <Route path="/agregar-asamblea" element={<AgregarAsamblea />} />
          <Route path="/anunciosacuerdos" element={<AnunciosAcuerdos />} />
          <Route path="/agregar-anuncios" element={<AgregarAnuncios />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/agregarincidente" element={<AgregarIncidente />} />
          <Route path="/reportespendientes" element={<Reportes/>} />
          <Route path="/reportesresueltos" element={<ReportesResueltos/>} />
          <Route path="/convenios" element={<Convenios/>} />
          <Route path="/agregarconvenios" element={<AgregarConvenio/>} />
          {/* RUTAS FINANZAS */}
          <Route path="/estados-cuenta" element={<EstadosDeCuenta />} />
          <Route path="/cuotas-mantenimiento" element={<CuotasMantenimiento />} />
          <Route path="/cuotas-mantenimiento/recaudar" element={<CuotaTotalRecaudar />} />
          <Route path="/cuotas-mantenimiento/pendiente" element={<CuotaTotalPendiente />} />
          <Route path="/cuotas-mantenimiento/pagado" element={<CuotaTotalPagado />} />
        </Routes>
      </AdminDashboard>
    </>
  );
};
