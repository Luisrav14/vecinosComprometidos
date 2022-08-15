import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const PaymentForms =() =>{
    return(
    <Cards
        number={413456789123}
        name={"Ernesto"}
        expiry={1020}
        cvc={"123"}
        focus="name"
    />
    );
}

export default PaymentForms