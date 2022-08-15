import React, { useState } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";



const PaymentForms = () => {
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            [e.target.number]: e.target.value,
            [e.target.expiry]: e.target.value,
            [e.target.cvc]: e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
    }
    return (
        <div className='card-body'>
            <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus} />
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Nombre</label>
                    <input className='form-control' placeholder='Nombre' type="text" name="name" id="name" onChange={handleInputChange} onFocus={handleFocusChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="name">Numero de la tarjeta</label>
                    <input className='form-control' type="number" placeholder='•••• •••• •••• ••••' name="number" id="number" onChange={handleInputChange} onFocus={handleFocusChange} maxLength="16" />
                </div>
                <div className='row'>
                    <div class="col">
                        <div className='form-group'>
                            <label htmlFor="name">Fecha de expiracion </label>
                            <input className='form-control' placeholder='Fecha de expiracion' type="number" name="expiry" id="expiry" onChange={handleInputChange} onFocus={handleFocusChange}  maxLength="4" />
                        </div>

                    </div>

                    <div class="col">
                        <label htmlFor="name"> CVV</label> <br></br>
                        <input className='form-control' type="text" placeholder='•••' name="cvc" id="cvc" onChange={handleInputChange} onFocus={handleFocusChange}  maxLength="4"/>
                    </div>
                </div>
                <button type="button" className=" btn btn-success btn-block btn-lg">Pagar</button>
            </form>

        </div>
    );
};

export default PaymentForms;
