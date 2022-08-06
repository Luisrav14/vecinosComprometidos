import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<App />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard routes */}
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
