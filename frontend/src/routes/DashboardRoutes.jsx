import React from "react";
import { Route, Routes } from "react-router-dom";
import { UsuariosDashboard, DashUser, Efectivo, PagosPendientes, SaldoFavor, Suscripcion, Tarjeta, Transferencia, HistorialPagos, } from "../pages";

export const DashboardRoutes = () => {
  return (
    <>
      <UsuariosDashboard>
        <Routes>
          <Route path="/" element={<DashUser />} />
          <Route path="/suscripcion" element={<Suscripcion />} />
          <Route path="/efectivo" element={<Efectivo />} />
          <Route path="/transferencia" element={<Transferencia />} />
          <Route path="/pagospendientes" element={<PagosPendientes />} />
          <Route path="/saldofavor" element={<SaldoFavor />} />
          <Route path="/tarjeta" element={<Tarjeta />} />
          <Route path="/historialpagos" element={<HistorialPagos />} />
        </Routes>
      </UsuariosDashboard>
    </>
  );
};
