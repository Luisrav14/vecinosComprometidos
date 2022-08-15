import React from "react";
import { Navbar } from "../../components/admin/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { SidebarUser } from "../../components/admin/SidebarUser";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import PaymentForms from "./paymentform";

export const Tarjeta = () => {
  return (
    <>
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0"> </h5>
          </div>
          <PaymentForms />

          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
};
