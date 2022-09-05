import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaHouseUser, FaFileAlt, FaHome, FaRegSave, FaBuilding } from "react-icons/fa";

export const AgregarPropietario = () => {
  const { register, handleSubmit } = useForm();

  const [rentaForm, setRentaForm] = useState(false);
  const [loteForm, setloteForm] = useState(false);

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Agregar propietario</h5>
            <div className="col-md-6 text-right">
              <Link to="/admin/general" className="btn btn-primary">
                <FaArrowLeft /> Regresar
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(showData)}>
            <div className="row justify-content-center d-flex">
              {/* Datos del Propietario */}

              <div className="container">
                <div className="row">
                  <div className="col-md-12 border-bottom border-1 my-3">
                    <p className="text-primary fw-bolder">
                      <FaHouseUser /> Datos del Propietario
                    </p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Nombre(s) *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("nombre", {
                        required: true,
                      })}
                      placeholder="Nombre(s)"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Apellido Paterno *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("apellidoP", {
                        required: true,
                      })}
                      placeholder="Apellido Paterno"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Apellido Materno *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("apellidoM", {
                        required: true,
                      })}
                      placeholder="Apellido Materno"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" {...register("fecha_nacimiento")} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Correo *</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("correo", {
                        required: true,
                      })}
                      placeholder="Correo"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Celular *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("celular", {
                        required: true,
                      })}
                      placeholder="Celular"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" {...register("telefono")} placeholder="Teléfono" />
                  </div>
                </div>
              </div>

              {/* Datos de Facturación */}

              <div className="container row">
                <div className="col-md-12 border-bottom border-1 my-3">
                  <p className="text-primary fw-bolder">
                    <FaFileAlt /> Datos de Facturación
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-label">Razón Social</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("razon_social", {
                      required: true,
                    })}
                    placeholder="Ej. Razon Social"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("correo_factura", {
                      required: true,
                    })}
                    placeholder="Correo"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">RFC</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("rfc", {
                      required: true,
                    })}
                    placeholder="RFC"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Fraccionamiento</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("fraccionamiento", {
                      required: true,
                    })}
                    placeholder="Fraccionamiento"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("calle", {
                      required: true,
                    })}
                    placeholder="Calle"
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">Número Interior</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("num_int", {
                      required: true,
                    })}
                    placeholder="Número Interior"
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">Número Exterior</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("num_ext", {
                      required: true,
                    })}
                    placeholder="Número Exterior"
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label"> Código Postal</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("codigo_postal", {
                      required: true,
                    })}
                    placeholder="Código Postal"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("ciudad", {
                      required: true,
                    })}
                    placeholder="Ciudad"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("estado", {
                      required: true,
                    })}
                    placeholder="Estado"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">País</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("pais", {
                      required: true,
                    })}
                    placeholder="País"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Forma de pago</label>
                  <select
                    className="form-select"
                    {...register("forma_pago", {
                      required: true,
                    })}
                  >
                    <option>Selecciona una forma de pago</option>
                    <option value="01">01 - Efectivo</option>
                    <option value="02">02 - Cheque nominativo</option>
                    <option value="03">03 - Transferencia electrónica de fondos</option>
                    <option value="04">04 - Tarjeta de credito</option>
                    <option value="05">05 - Monedero electrónico</option>
                    <option value="06">06 - Dinero electrónico</option>
                    <option value="08">08 - Vales de despensa</option>
                    <option value="12">12 - Dación de pago</option>
                    <option value="13">13 - Pago por subrogación</option>
                    <option value="14">14 - Pago por consignación</option>
                    <option value="15">15 - Condonación</option>
                    <option value="17">17 - Compensación</option>
                    <option value="23">23 - Novación</option>
                    <option value="24">24 - Confusión</option>
                    <option value="25">25 - Remisión de deuda</option>
                    <option value="26">26 - Prescipción o caducidad</option>
                    <option value="27">27 - A satisfaccción del acreedor</option>
                    <option value="28">28 - Tarjeta de débito</option>
                    <option value="29">29 - Tarjeta de servicios</option>
                    <option value="30">30 - Aplicación de anticipos</option>
                    <option value="99">99 - Por definir</option>
                    <option value="31">31 - Intermediario pagos</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Método de pago</label>
                  <select
                    className="form-select"
                    {...register("metodo_pago_factura", {
                      required: true,
                    })}
                  >
                    <option selected disabled>
                      Selecciona un método de pago
                    </option>
                    <option value="PUE">Pago de una sola exhibición</option>
                    <option value="PPD">Pago en parcialidades o diferido</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Uso CFDI</label>
                  <select
                    className="form-select"
                    {...register("cfdi", {
                      required: true,
                    })}
                  >
                    <option defaultValue={0}>Selecciona una opción</option>
                    <option value="G01">G01 - Adquisición de mercancias</option>
                    <option value="G02">G02 - Devoluciones, descuentos o bonificaciones</option>
                    <option value="G03">G03 - Gastos en general</option>
                    <option value="I01">I01 - Construcciones</option>
                    <option value="I02">I02 - Mobiliario y equipo de oficina por inversiones</option>
                    <option value="I03">I03 - Equipo de transporte</option>
                    <option value="I04">I04 - Equipo de cómputo y accesorios</option>
                    <option value="I05">I05 - Dados Troqueles, moldes, matrices y herramental</option>
                    <option value="I06">I06 - Comunicaciones teléfonicas</option>
                    <option value="I07">I07 - Comunicaciones satelitales</option>
                    <option value="I08">I08 - Otra maquinaria y equipo</option>
                    <option value="P01">P01 - Por definir</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Régimen Fiscal</label>
                  <select
                    className="form-select"
                    {...register("regimen_fiscal", {
                      required: true,
                    })}
                  >
                    <option defaultValue={0}>Selecciona el Régimen Fiscal</option>
                    <option value="601">601 - General de Ley Personas Morales</option>
                    <option value="603">603 - Personas Morales con Fines no Lucrativos</option>
                    <option value="605">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
                    <option value="606">606 - Arrendamiento</option>
                    <option value="607">607 - Régimen de Enajenación o Adquisición de Bienes</option>
                    <option value="608">608 - Demás ingresos</option>
                    <option value="610">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</option>
                    <option value="611">611 - Ingresos por Dividendos (socios y accionistas)</option>
                    <option value="612">612 - Personas Físicas con Actividades Empresariales y Profesionales</option>
                    <option value="614">614 - Ingresos por intereses</option>
                    <option value="615">615 - Régimen de los ingresos por obtención de premios</option>
                    <option value="616">616 - Sin obligaciones fiscales</option>
                    <option value="620">620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
                    <option value="621">621 - Incorporación Fiscal</option>
                    <option value="622">622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
                    <option value="623">623 - Opcional para Grupos de Sociedades</option>
                    <option value="624">624 - Coordinados</option>
                    <option value="625">625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                    <option value="626">626 - Régimen Simplificado de Confianza</option>
                  </select>
                </div>
              </div>

              {/* Datos de la Propiedad */}

              <div className="container">
                <div className="row">
                  <div className="col-md-12 border-bottom border-1 my-3">
                    <p className="text-primary fw-bolder">
                      <FaHome /> Datos de la Propiedad
                    </p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Calle *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("calle", {
                        required: true,
                      })}
                      placeholder="Calle"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Número *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("numero", {
                        required: true,
                      })}
                      placeholder="Número"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Clave de Unidad *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("clave_unidad", {
                        required: true,
                      })}
                      placeholder="Clave de Unidad"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea type="text" className="form-control" {...register("descripcion")} rows={4} placeholder="Añade una descripción de la propiedad" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Metros (M²)</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("metros2")}
                      placeholder="Metros cuadrados"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Método de pago *</label>
                    <select
                      className="form-select"
                      {...register("metodo_pago", {
                        required: true,
                      })}
                    >
                      <option selected disabled>
                        Selecciona un método de pago
                      </option>
                      <option value="Suscripción">Suscripción</option>
                      <option value="Efectivo">Pago en efectivo</option>
                      <option value="Transferencia">Transferencia</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Cuota suscripción *</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("cuota_suscripcion", {
                        required: true,
                      })}
                      placeholder="Cuota de mantenimeinto (Suscripción)"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Cuota efectivo, transferencia o depósito *</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("cuota_mantenimiento", {
                        required: true,
                      })}
                      placeholder="Cuota de mantenimeinto (Efectivo, Transferencia o Depósito)"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Tipo de propiedad</label>
                    <Select
                      options={[
                        { label: "Casa Construida", value: "construida" },
                        { label: "Casa en Proceso", value: "proceso" },
                        { label: "Terreno Baldío", value: "baldio" },
                      ]}
                      onChange={({ value }) => (value === "baldio" ? setloteForm(true) : setloteForm(false))}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Estatus de la propiedad</label>
                    <Select
                      options={[
                        { label: "Casa habitada", value: "habitada" },
                        { label: "Casa en Renta", value: "rentada" },
                        { label: "Sin habitar", value: "sinHabitar" },
                      ]}
                      onChange={({ value }) => (value === "rentada" ? setRentaForm(true) : setRentaForm(false))}
                    />
                  </div>

                  {rentaForm && (
                    <>
                      <div className="col-md-12 border-bottom border-1 my-3">
                        <p className="text-primary fw-bolder">
                          <FaBuilding /> Inquilino
                        </p>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">Nombre(s)</label>
                        <input type="text" className="form-control" {...register("inquilino_nombre")} placeholder="Nombre(s)" />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Apellido Paterno</label>
                        <input type="text" className="form-control" {...register("inquilino_apellidoP")} placeholder="Apellido Paterno" />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Apellido Materno</label>
                        <input type="text" className="form-control" {...register("inquilino_apellidoM")} placeholder="Apellido Materno" />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" {...register("inquilino_correo")} placeholder="Correo" />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Celular</label>
                        <input type="text" className="form-control" {...register("inquilino_celular")} placeholder="Celular" />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" className="form-control" {...register("telefono")} placeholder="Teléfono" />
                      </div>
                    </>
                  )}

                  {loteForm && (
                    <>
                      <div className="col-md-12 border-bottom border-1 my-3">
                        <p className="text-primary fw-bolder">
                          <FaBuilding /> Lote baldío
                        </p>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Calle</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lote_calle", {
                            required: true,
                          })}
                          placeholder="Calle"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Colonia</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lote_colonia", {
                            required: true,
                          })}
                          placeholder="Colonia"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Código Postal</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lote_cp", {
                            required: true,
                          })}
                          placeholder="Código Postal"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Ciudad</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lote_ciudad", {
                            required: true,
                          })}
                          placeholder="Ciudad"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" className="form-control" {...register("lote_telefono")} placeholder="Teléfono" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lote_correo", {
                            required: true,
                          })}
                          placeholder="Correo electrónico"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="col-md-4 my-5">
                <button type="submit" className="btn btn-primary form-control">
                  <FaRegSave /> Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
