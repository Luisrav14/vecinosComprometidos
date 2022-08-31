import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsEnvelope, BsPencilSquare, BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillDelete,AiFillFile } from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";

export const Medidores = () => {
 

  const columns = [
    {
      id: "Año",
      name: "Año",
      selector: (row) => row.ano,
      sortable: true,
      width: "7%",
      center: true,
    },
    {
    
      name: "Mes",
      selector: (row) => row.mes,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Num de medidor",
      selector: (row) => row.nummedi,
      center: true,
     
    },
    {
    
      name: "Num de servicio",
      selector: (row) => row.numservi,
      sortable: true,
      center: true,
      width: "15%",
    },
    {
      name: "Mes o periodo",
      selector: (row) => row.mesiperiodo,
      center: true,
     
    }, 
    {
      name: "Fecha de corte",
      selector: (row) => row.fechacorte,
      center: true,
     
    }, 
    {
      name: "Saldo final",
      selector: (row) => row.saldo,
      center: true,
     
    }, 
    {
     
      name: "Acciones",
      selector: (row) => row.acciones,
      center: true,
    },
    
  ];

  const data = [
    {
      ano: 1,
      mes: "Enero",
      nummedi:"NN024L",
      numservi:"645130804692",
      mesiperiodo: "24 MAR 2022 - 25 ABR 2022	",
      fechacorte: "2022-05-08	",
      saldo:"10644.00",
      acciones: [
        <button className="btn btn-success mx-2">
          <AiFillFile />
        </button>
      ],
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Medidores</h1>
      <h6>En esta página encontramos una lista de medidores de nuestro fraccionamiento.</h6>
      <div className="card">
        <div className="card-header border-bottom border-1 ">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Proveedores </h5>
            <div className="col-md-6 text-right">
            <Link to="/admin/agregar-proveedores" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </Link>
            </div>
          </div>
        </div>

        <div className="card-block mb-5 ">
            <div className="text-center">
              <div className="container mt-5">
                <div className="card-block">
                  <div className="row">
                    <form className="form-group form-default col-md-5 col-sm-12 row justify-content-center">
                      <div className="col-md-6 col-sm-12 mt-1">
                        <label className="col-sm-12" htmlFor="">Buscar por año:</label>
                        <select name="" className="form-control" id="">
                          <option selected disabled>Selcciona un año</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary col-md-4 col-sm-12 mt-5">Buscar</button>
                    </form>
                    <form className="form-group form-default col-md-5 col-sm-12 row justify-content-center">
                      <div className="col-md-6 col-sm-12 mt-1">
                        <label className="col-sm-12">Buscar por mes:</label>

                        <select className="form-control" name="month" required>
                          <option selected disabled>Selcciona un mes</option>
                          <option value="01">Enero</option>
                          <option value="02">Febrero</option>
                          <option value="03">Marzo</option>
                          <option value="04">Abril</option>
                          <option value="05">Mayo</option>
                          <option value="06">Junio</option>
                          <option value="07">Julio</option>
                          <option value="08">Agosto</option>
                          <option value="09">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary col-md-4 col-sm-12 mt-5">  Buscar</button>
                    </form>
                    <form id="" className="form-group form-default col-md-2 col-sm-12 row">
                      <label className="col-sm-12"></label>
                      <label className="col-sm-12"></label>
                      <label className="col-sm-12"></label>
                      
                        <button type="submit" className="btn btn-primary col-md-12 col-sm-12">  Mostrar Todos</button>
                    </form>
                    <DataTableComponent columns={columns} data={data}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};