import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { DashUser } from "../pages/usuarios/dashuser";
import { BaseDatosGeneral } from "../pages/admin/BaseDatosGeneral";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin/" element={<AdminDashboard />}>
          <Route path="general" element={<BaseDatosGeneral />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard user routes */}
        <Route path="/dashuser" element={<DashUser />} />
      </Routes>
    </BrowserRouter>
  );
};
