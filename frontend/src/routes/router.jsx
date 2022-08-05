import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import { LoginPage } from "../pages/LoginPage";
import { Index } from "../pages/Index";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
