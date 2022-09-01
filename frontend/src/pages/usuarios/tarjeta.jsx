import PaymentForms from "./paymentform";
import "react-credit-cards-2/es/styles-compiled.css";

export const Tarjeta = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Tarjeta </h5>
        </div>

        <div className="card-body">
          <PaymentForms />
        </div>
      </div>
    </>
  );
};
