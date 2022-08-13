import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IndexPage, LoginPage, BaseDatosGeneral, ResumenInformacion } from "../pages/";

import { Suscripcion, Efectivo, Transferencia, PagosPendientes, SaldoFavor, DashUser } from "../pages/usuarios/";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin/" element={<ResumenInformacion />}></Route>
        <Route path="/admin/general" element={<BaseDatosGeneral />}></Route>

        {/* Dashboard user routes */}
        <Route path="/dashboard/" element={<DashUser />} />
        <Route path="/dashboard/suscripcion" element={<Suscripcion />} />
        <Route path="/dashboard/efectivo" element={<Efectivo />} />
        <Route path="/dashboard/transferencia" element={<Transferencia />} />
        <Route path="/dashboard/pagospendientes" element={<PagosPendientes />} />
        <Route path="/dashboard/saldofavor" element={<SaldoFavor />} />
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
