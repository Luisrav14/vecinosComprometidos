import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { DashUser } from "../pages/usuarios/dashuser";
import { BaseDatosGeneral } from "../pages/admin/BaseDatosGeneral";
import { ResumenInformacion } from "../pages/admin/ResumenInformacion";
import { Suscripcion } from "../pages/usuarios/suscripcion";
import { Efectivo } from "../pages/usuarios/efectivo";

import { Transferencia } from "../pages/usuarios/transferencia";
import { PagosPendientes } from "../pages/usuarios/pagospendientes";
import { SaldoFavor } from "../pages/usuarios/saldofavor";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin/" element={<ResumenInformacion />}></Route>
        <Route path="/admin/general" element={<BaseDatosGeneral />}></Route>

        {/* Dashboard user routes */}
        <Route path="/suscripcion" element={<Suscripcion />} />
        <Route path="/efectivo" element={<Efectivo />} />
        <Route path="/transferencia" element={<Transferencia />} />
        <Route path="/pagospendientes" element={<PagosPendientes />} />
        <Route path="/saldofavor" element={<SaldoFavor />} />

      </Routes>
    </BrowserRouter>

    /* 
      <BrowserRouter>
        <AdminDashboard>
          <Routes>
            <Route path="/admin/general" element={<BaseDatosGeneral />} />
          </Routes>
        </AdminDashboard>
      </BrowserRouter> 
    */
  );
};
