import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave } from "react-icons/fa";
import { AdminDashboard } from "./AdminDashboard";
import { useForm } from "../../hooks/useForm";

export const AgregarPropietario = () => {
  return (
    <AdminDashboard title="">
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar propietario</h5>
            <div className="col-md-6 text-right">
              <a href="/admin/general" className="btn btn-primary">
                <FaArrowLeft /> Regresar
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form action="">
            <div className="row justify-content-center d-flex">
              <div className="col-md-12 border-bottom border-1 my-3">
                <p className="text-primary fw-bolder">
                  <FaHouseUser /> Datos del Propietario
                </p>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Nombre(s)</label>
                <input type="text" className="form-control" placeholder="Nombre(s)" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Apellido Paterno</label>
                <input type="text" className="form-control" placeholder="Apellido Paterno" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Apellido Materno</label>
                <input type="text" className="form-control" placeholder="Apellido Materno" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha de nacimiento</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Correo</label>
                <input type="email" className="form-control" placeholder="Correo" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Celular</label>
                <input type="text" className="form-control" placeholder="Celular" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Teléfono</label>
                <input type="text" className="form-control" placeholder="Teléfono" />
              </div>

              <div className="col-md-12 border-bottom border-1 my-3">
                <p className="text-primary fw-bolder">
                  <FaFileAlt /> Datos de Facturación
                </p>
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Razón Social</label>
                <input type="text" className="form-control" placeholder="Ej. Razon Social" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Correo</label>
                <input type="email" className="form-control" placeholder="Correo" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">RFC</label>
                <input type="text" className="form-control" placeholder="RFC" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Fraccionamiento</label>
                <input type="text" className="form-control" placeholder="Fraccionamiento" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Calle</label>
                <input type="text" className="form-control" placeholder="Calle" />
              </div>
              <div className="col-md-2 mb-3">
                <label className="form-label">Número Interior</label>
                <input type="number" className="form-control" placeholder="Número Interior" />
              </div>
              <div className="col-md-2 mb-3">
                <label className="form-label">Número Exterior</label>
                <input type="number" className="form-control" placeholder="Número Exterior" />
              </div>
              <div className="col-md-2 mb-3">
                <label className="form-label"> Código Postal</label>
                <input type="number" className="form-control" placeholder="Código Postal" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Ciudad</label>
                <input type="text" className="form-control" placeholder="Ciudad" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Estado</label>
                <input type="text" className="form-control" placeholder="Estado" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">País</label>
                <input type="text" className="form-control" placeholder="País" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Forma de pago</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona una forma de pago</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Método de pago</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona un método de pago</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Uso CFDI</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Régimen Fiscal</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona el Régimen Fiscal</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-12 border-bottom border-1 my-3">
                <p className="text-primary fw-bolder">
                  <FaHome /> Datos de la Propiedad
                </p>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Calle</label>
                <input type="text" className="form-control" placeholder="Calle" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Número</label>
                <input type="text" className="form-control" placeholder="Número" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Clave de Unidad</label>
                <input type="text" className="form-control" placeholder="Clave de Unidad" />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción</label>
                <textarea type="text" className="form-control" rows={4} placeholder="Añade una descripción de la propiedad" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Metros (M²)</label>
                <input type="number" className="form-control" placeholder="Metros cuadrados" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Método de pago</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona un método de pago</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Cuota suscripcion</label>
                <input type="number" className="form-control" placeholder="Cuota de mantenimeinto (Suscripcion)" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Cuota efectivo, transferencia o depósito</label>
                <input type="number" className="form-control" placeholder="Cuota de mantenimeinto (Efectivo, Transferencia o Depósito)" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Tipo de propiedad</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona un tipo de propiedad</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Estats de la propiedad</label>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue={0}>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-4 mt-5">
                <button className="btn btn-primary form-control">
                  {" "}
                  <FaRegSave /> Guardar
                </button>
              </div>
              <div className="col-md-4 mt-5">
                <button className="btn btn-outline-primary form-control">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminDashboard>
  );
};
