import { useState } from "react";
import { infoFraccionamiento } from "../global/infoFraccionamiento";
import { useForm } from "../hooks/useForm";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export const LoginForm = () => {
  const { formState, onInputChange, correo, password } = useForm({
    correo: "",
    password: "",
  });

  const [inputType, SetinputType] = useState("password");

  const showHiddePassword = () => (inputType == "password" ? SetinputType("text") : SetinputType("password"));

  const handleSubmit = () => {};

  return (
    <div className="d-lg-flex half mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 mb-5">
            <div className="text-center">
              <a href="/">
                <img src={infoFraccionamiento.logo} width="155" height="140" alt="logo" />
              </a>
            </div>
            <form id="ingresar">
              <div className="form-group first">
                <label className="fw-normal mb-1" htmlFor="username">
                  Usuario
                </label>
                <input type="text" className="form-control" placeholder="Correo Electrónico" id="correo" name="correo" value={correo} onChange={onInputChange} />
              </div>
              <div className="form-group last my-3">
                <label className="fw-normal mb-1" htmlFor="password">
                  Contraseña
                </label>
                <div className="input-group mb-3">
                  <input type={inputType} className="form-control" placeholder="Contraseña" id="password" name="password" value={password} onChange={onInputChange} />
                  <button className="btn btn-outline-primary" type="button" onClick={showHiddePassword}>
                    {inputType != "password" ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </button>
                </div>
              </div>
              <input type="button" id="entrar" value="Entrar" className="btn btn-block form-control btn-primary form-inline" />
              <div className="d-flex pt-2 justify-content-center">
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
