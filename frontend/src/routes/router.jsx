import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IndexPage, LoginPage, PasswordRecoveryPage, AsambleasRecientes,AsambleasAsistencia } from "../pages/";
import { AdminRoutes } from "./AdminRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
        <Route path="/asambleasrecientes" element={<AsambleasRecientes />} />
        <Route path="/asambleasasistencia" element={<AsambleasAsistencia />} />

        {/* Admin routes */}
        <Route path="admin/*" element={<AdminRoutes />} />

        {/* Dashboard user routes */}
        <Route path="dashboard/*" element={<DashboardRoutes />} />
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
