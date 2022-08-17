import { BsPinAngle } from "react-icons/bs";

export const RowExpandedComponent = ({ data }) => (
  <pre className="mx-5 px-5">
    <div className="container">
      <div className="row">
        <table className="table table-sm table-borderless">
          <thead className="">
            <tr>
              <th scope="col">Clave de unidad</th>
              <th scope="col">Método de pago</th>
              <th scope="col">Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FA-522-00</td>
              <td>Suscripción</td>
              <td>
                <button className="btn btn-success">
                  <BsPinAngle />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </pre>
);
