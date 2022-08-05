import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import { HomePage } from "../pages/HomePage";
import { Index } from "../pages/Index";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/test" element={<App />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};
