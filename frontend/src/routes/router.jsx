import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/test" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
