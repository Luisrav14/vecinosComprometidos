import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillFileEarmarkFill, BsFillChatLeftTextFill } from "react-icons/bs";
import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendario from "../usuarios/Calendario";



export const CalendarioReservaciones = () => {



  return (
    <>
      <h1 className="mb-3 fw-bold">Calendario de Reservación</h1>
      <h6>En esta página podremos ver un calendario, con este calendario podemos ver un vistazo rápido a las áreas del fraccionamiento reservadas para eventos o juntas, adicionalmente podemos reservar un día específico para un área común.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Calendario </h5>

            <div className="col-md-6 text-right">
              <Link to="/admin/agregar-reservacion" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </Link>
            </div>

          </div>
          <div className="row d-flex justify-content-around mt-5">
           <Calendario/>
          </div>
        </div>


      </div>

    </>
  );
};
