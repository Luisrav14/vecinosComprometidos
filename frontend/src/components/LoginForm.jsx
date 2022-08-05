import { infoFraccionamiento } from "../global/infoFraccionamiento";
import { useForm } from "../hooks/useForm";

export const LoginForm = () => {
  const { formState, onInputChange, email, password } = useForm({
    email: "",
    password: "",
  });

  return (
    <div className="d-lg-flex half">
      <div className="container ">
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
                <input type="text" className="form-control" placeholder="Correo Electrónico" id="username" />
              </div>
              <div className="form-group last my-3">
                <label className="fw-normal mb-1" htmlFor="password">
                  Contraseña
                </label>
                <input type="password" className="form-control" placeholder="Contraseña" id="password" />
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
