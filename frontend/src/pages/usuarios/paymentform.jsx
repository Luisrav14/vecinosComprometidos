import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentForms = () => {
  return (
    <div className="card-body">
      <Cards number={46456789123} name={"Ernesto"} expiry={1020} cvc={"123"} focus="name" />
    </div>
  );
};

export default PaymentForms;
