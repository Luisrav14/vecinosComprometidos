import { useState } from "react";
import { Route, useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import globalConfig from "../global/globalConfig";
import { infoFraccionamiento } from "../global/infoFraccionamiento";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const [inputType, SetinputType] = useState("password");

  const handleChangePassword = () => (inputType == "password" ? SetinputType("text") : SetinputType("password"));

  // const dataValidation = async (data) => {
  //   await axios
  //     .post(`${globalConfig.api_URL}/login`, data)
  //     .then(({ data }) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  const dataValidation = (data) => {
    console.log(data);
    const navigate = useNavigate();

    if (data.email == "admin@admin.com" && data.password == "1234") {
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="d-lg-flex half mt-5 py-4">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 mb-5 py-5">
            <div className="mb-4 text-center">
              <a href="/">
                <img src={infoFraccionamiento.logo_color} width="215" height="65" alt="logo" />
              </a>
            </div>
            <form onSubmit={handleSubmit(dataValidation)}>
              <div className="form-group first">
                <label className="fw-normal mb-1" htmlFor="username">
                  Usuario
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo Electrónico"
                  id="correo"
                  name="correo"
                  {...register("email", {
                    required: true,
                    message: "Ingrese correo electrónico",
                  })}
                />
              </div>
              <div className="form-group last my-3">
                <label className="fw-normal mb-1" htmlFor="password">
                  Contraseña
                </label>
                <div className="input-group mb-3">
                  <input
                    type={inputType}
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      message: "Ingrese contraseña",
                    })}
                  />
                  <button className="btn btn-outline-primary" type="button" onClick={handleChangePassword}>
                    {inputType != "password" ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </button>
                </div>
              </div>
             {/*  <button type="submit" id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline">
                Entrar
              </button> */}
              <a id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline" href="/admin">
                Administración
              </a>
              <a id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline" href="/dashboard/">
                Micrositio
              </a>
              <div className="d-flex pt-4 justify-content-center">
                <small className="text-center">
                  ¿Olvidaste tu contraseña? <a href="/password-recovery"> Click Aquí</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
