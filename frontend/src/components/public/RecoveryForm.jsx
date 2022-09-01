import { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, Route, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import globalConfig from "../../global/globalConfig";
import { infoFraccionamiento } from "../../global/infoFraccionamiento";

export const RecoveryForm = () => {
  const { register, handleSubmit } = useForm();

  const sendEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Operación realizada",
      text: "Se ha enviado un código de recuperación a tu email",
    });
  };

  return (
    <>
      <div className="d-lg-flex half py-4">
        <div className="container py-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 mb-5 py-5">
              <div className="mb-4 text-center">
                <a href="/">
                  <img src={infoFraccionamiento.logo_color} width="215" height="65" alt="logo" />
                </a>
                <h2 className="mt-5 taxt-center">Recuperar Contraseña</h2>
              </div>
              <form className="px-5" onSubmit={handleSubmit(sendEmail)}>
                <div className="form-group first">
                  <label className="fw-normal mb-1" htmlFor="username">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingrese su correo electrónico"
                    id="correo"
                    name="correo"
                    {...register("email", {
                      required: true,
                      message: "Ingrese correo electrónico",
                    })}
                  />
                </div>
                <button type="submit" id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline">
                  Enviar
                </button>
                <div className="d-flex pt-4 justify-content-center">
                  <p className="text-center">
                    <NavLink to="/login">Iniciar sesión</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
