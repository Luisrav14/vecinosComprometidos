import { useState } from "react";
import { NavLink, Route, useNavigate } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import globalConfig from "../global/globalConfig";
import { infoFraccionamiento } from "../global/infoFraccionamiento";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const [inputType, SetinputType] = useState("password");
  const [loginErrorMail, setloginErrorMail] = useState(false);
  const [loginErrorPass, setloginErrorPass] = useState(false);

  const handleChangePassword = () => (inputType == "password" ? SetinputType("text") : SetinputType("password"));

  const navigate = useNavigate();

  /*  const dataValidation = async (data) => {
    await axios
      .post(`${globalConfig.api_URL}/login`, data)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  }; */

  /* Login temporal */

  const dataValidation = async (data) => {
    setloginErrorMail(false);
    setloginErrorPass(false);

    console.log(data);

    if (data.correo == "admin@admin.com") {
      if (data.password == "1234") {
        await Swal.fire({
          icon: "success",
          title: "Inicio de sesion correcto",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin", {
          replace: true,
        });
      } else {
        setloginErrorPass(true);
      }
    } else if (data.correo == "user@user.com") {
      if (data.password == "1234") {
        await Swal.fire({
          icon: "success",
          title: "Inicio de sesion correcto",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard", {
          replace: true,
        });
      } else {
        setloginErrorPass(true);
      }
    } else {
      setloginErrorMail(true);
    }
  };

  return (
    <div className="d-lg-flex half py-4">
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 mb-5 py-5">
            <div className="mb-4 text-center">
              <a href="/">
                <img src={infoFraccionamiento.logo_color} width="215" height="65" alt="logo" />
              </a>
            </div>
            <form className="px-5" onSubmit={handleSubmit(dataValidation)}>
              <div className="form-group first">
                <label className="fw-normal mb-1" htmlFor="username">
                  Usuario
                </label>
                <input
                  type="email"
                  className={`form-control ${loginErrorMail ? "border border-2 border-danger" : ""} `}
                  placeholder="Correo Electrónico"
                  id="correo"
                  name="correo"
                  {...register("correo", {
                    required: true,
                    message: "Ingrese correo electrónico",
                  })}
                />
                {loginErrorMail && <small className="text-danger">Correo inexistente, verifique.</small>}
              </div>
              <div className="form-group last my-3">
                <label className="fw-normal mb-1" htmlFor="password">
                  Contraseña
                </label>
                <div className="input-group mb-1">
                  <input
                    type={inputType}
                    className={`form-control ${loginErrorPass ? "border border-2 border-danger" : ""} `}
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
                {loginErrorPass && <small className="text-danger">Contraseña Incorrecta</small>}
              </div>

              <button type="submit" id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline">
                Entrar
              </button>

              {/*  <a id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline" href="/admin">
                Administración
              </a>
              <a id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline" href="/dashboard/">
                Micrositio
              </a> */}
              <div className="d-flex pt-4 justify-content-center">
                <small className="text-center">
                  ¿Olvidaste tu contraseña? <NavLink to="/password-recovery"> Click Aquí</NavLink>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
