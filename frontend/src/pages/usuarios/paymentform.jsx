import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

<<<<<<< Updated upstream
const PaymentForms = () => {
  return (
    <div className="card-body">
      <Cards number={46456789123} name={"Ernesto"} expiry={1020} cvc={"123"} focus="name" />
=======
const PaymentForms =() =>{
    return(
        <div className='card-body'>
    <Cards
        number={46456789123}
        name={"Ernesto"}
        expiry={1020}
        cvc={"123"}
        focus="name"
    />
    <form>
        <div className='form-group'>
            <label htmlFor="name">Nombre</label>
            <input className='form-control' placeholder='Nombre' type="text" name="" id="" />
        </div>

        <div className='form-group'>
            <label htmlFor="name">Numero de la tarjeta</label>
            <input className='form-control' type="number" placeholder='•••• •••• •••• ••••' name="" id="" />
        </div>
        <div className='row'>
        <div class="col">
        <label htmlFor="name">Mes de expiración</label>
        <select class="form-select" aria-label="Default select example">
  <option selected>Selecciona un mes</option>
  <option value="1">Enero</option>
  <option value="2">Febrero</option>
  <option value="3">Marzo</option>
</select>
    </div>
    <div class="col">
    <label htmlFor="name">Dia de expiración</label>
            <input className='form-control' type="number" placeholder='••' name="" id="" />
    </div>
    <div class="col">
    <label htmlFor="name"> CVV</label>
            <input className='form-control' type="number" placeholder='•••' name="" id="" />
    </div>
        </div>
    </form>
>>>>>>> Stashed changes
    </div>
  );
};

export default PaymentForms;
