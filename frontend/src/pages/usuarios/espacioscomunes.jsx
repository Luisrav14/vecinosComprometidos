import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const EspaciosComunes = () => {
  return (
    <>
      <div className="col-12">
        <h2>
          <b>Espacios comunes</b>
        </h2>
        <div className="card">
          <div className="card-header mb-0">
            <div className=" rounded col-xl-12 col-md-12">
              <div className="card-block mb-5 mt-3">
                <div className="text-center">
                  <div className="card-block ">
                    <div className="row d-flex justify-content-around">
                      <Calendar style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body"></div>
        </div>
      </div>
      <div className="text-right">
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/openpay-logo.png" alt="" />
        <img className="card-img-top" style={{ width: "10%" }} src="https://quintasresidencial.com/fraccionamiento/QuintasResidencial/assets/images/ssl.png" alt="" />
      </div>
    </>
  );
};
function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
