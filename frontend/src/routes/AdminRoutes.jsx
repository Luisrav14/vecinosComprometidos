import React from "react";
import { Route, Routes } from "react-router-dom";

import { AdminDashboard, AgregarPropietario, BaseDatosGeneral, CuotasMantenimiento,
   CuotaTotalPagado, CuotaTotalPendiente, CuotaTotalRecaudar, EditarPropietario,
    ResumenInformacion, Asamblea, EstadosDeCuenta, AgregarAsamblea, AnunciosAcuerdos,
    InventarioActivo, InventarioDescontinuado, AgregarAnuncios, AccionesMod,
    CasasRenta, LotesBaldios, Inventario,AgregarInventario, InformacionPersonal, CensoAnimal, Estadisticas,
    Incidentes, AgregarIncidente, Reportes, ReportesResueltos, Convenios, AgregarConvenio,
    InformesFinancieros, AgregarInformeFinanciero, RecursosHumanos, AgregarRecursosHumanos,
    Proveedores, AgregarProveedor, Reglamentos, AgregarReglamentos, BlogDeNoticias,
    AgregarBlog, CalendarioReservaciones, AreasReservadas, EncuestasAdm, AgregarEncuesta,
    Medidores, AgregarMedidores, SoportePendientes, AgregarSoportes, SoporteResueltos,
    Ofertas, AgregarOfertas } from "../pages";

export const AdminRoutes = () => {
  return (
    <>
      <AdminDashboard>
        <Routes>
          {/* RUTAS BASE DE DATOS */}
          <Route path="/" element={<ResumenInformacion />} />
          <Route path="/general" element={<BaseDatosGeneral />} />
          <Route path="/casas-renta" element={<CasasRenta />} />
          <Route path="/lotes-baldios" element={<LotesBaldios />} />
          <Route path="/agregar-propietario" element={<AgregarPropietario />} />
          <Route path="/editar-propietario" element={<EditarPropietario />} />
          <Route path="/inventarioactivo" element={<InventarioActivo />} />
          <Route path="/inventariodescontinuado" element={<InventarioDescontinuado />} />
          <Route path="/inventario/:categoria" element={<Inventario />} />
          <Route path="/agregar-inventario" element={<AgregarInventario />} />
          <Route path="/acciones" element={<AccionesMod />} />
          <Route path="/informacion-personal" element={<InformacionPersonal />} />
          <Route path="/censo-animal" element={<CensoAnimal />} />
          <Route path="/estadisticas" element={<Estadisticas />} />

          {/* RUTAS OPERACIONES */}
          <Route path="/asambleas" element={<Asamblea />} />
          <Route path="/agregar-asamblea" element={<AgregarAsamblea />} />
          <Route path="/anunciosacuerdos" element={<AnunciosAcuerdos />} />
          <Route path="/agregar-anuncios" element={<AgregarAnuncios />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/agregarincidente" element={<AgregarIncidente />} />
          <Route path="/reportespendientes" element={<Reportes />} />
          <Route path="/reportesresueltos" element={<ReportesResueltos />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route path="/agregarconvenios" element={<AgregarConvenio />} />
          <Route path="/informes-financieros" element={<InformesFinancieros />} />
          <Route path="/agregar-informe-financiero" element={<AgregarInformeFinanciero />} />
          <Route path="/recursos-humanos" element={<RecursosHumanos />} />
          <Route path="/agregar-recursos-humanos" element={<AgregarRecursosHumanos />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/agregar-proveedores" element={<AgregarProveedor />} />
          <Route path="/reglamentos" element={<Reglamentos />} />
          <Route path="/agregar-blog" element={<AgregarBlog />} />
          <Route path="/blogs" element={<BlogDeNoticias />} />
          <Route path="/agregar-blog" element={<AgregarBlog />} />
          <Route path="/calendario-reservaciones" element={<CalendarioReservaciones />} />
          <Route path="/areas-reservadas" element={<AreasReservadas />} />
          <Route path="/encuestasadm" element={<EncuestasAdm />} />
          <Route path="/agregar-encuestas" element={<AgregarEncuesta />} />
          <Route path="/medidores" element={<Medidores />} />
          <Route path="/agregar-medidores" element={<AgregarMedidores />} />
          <Route path="/soporte-pendientes" element={<SoportePendientes />} />
          <Route path="/agregar-soportes" element={<AgregarSoportes />} />
          <Route path="/soporte-resueltos" element={<SoporteResueltos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/agregar-ofertas" element={<AgregarOfertas />} />

          {/* RUTAS FINANZAS */}
          <Route path="/estados-cuenta" element={<EstadosDeCuenta />} />
          <Route path="/cuotas-mantenimiento" element={<CuotasMantenimiento />} />
          <Route path="/cuotas-mantenimiento/recaudar" element={<CuotaTotalRecaudar />} />
          <Route path="/cuotas-mantenimiento/pendiente" element={<CuotaTotalPendiente />} />
          <Route path="/cuotas-mantenimiento/pagado" element={<CuotaTotalPagado />} />

          {/* RUTAS CONTROL ACCESOS */}

        </Routes>
      </AdminDashboard>
    </>
  );
};
