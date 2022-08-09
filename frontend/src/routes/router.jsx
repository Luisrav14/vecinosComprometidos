import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { BaseDatosGeneral } from "../pages/admin/BaseDatosGeneral";
import { Navbar } from "../components/admin/Navbar";
import { Sidebar } from "../components/admin/Sidebar";

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
      </Routes>
    </BrowserRouter>
  );
};
