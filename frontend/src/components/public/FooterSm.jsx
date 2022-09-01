import { infoFraccionamiento } from "../../global/infoFraccionamiento";

export const FooterSm = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="bg-primary p-3 footer-sm">
      <div className="container">
        <div className="row">
          <div className="d-flex text-center text-light justify-content-center mt-1">
            <p>
              © Copyright {infoFraccionamiento.nombre}. Derechos reservados {year}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
