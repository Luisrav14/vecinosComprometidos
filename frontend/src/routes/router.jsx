import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AdminDashboard } from "../pages/admin/AdminDashboard";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
