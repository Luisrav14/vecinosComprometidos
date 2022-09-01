import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { AiFillIdcard, AiFillFile, AiOutlineStar, AiFillTag } from "react-icons/ai";

export const InventarioActivo = () => {
  const inventarioItems = [
    {
      id: 1,
      nombre: "Accesos",
      icon: <AiFillIdcard color="red" size={"1.5em"} />,
      cantidad: 15,
    },
    {
      id: 2,
      nombre: "Áreas comúnes",
      icon: <BiCoffee color="green" size={"1.5em"} />,
      cantidad: 56,
    },
    {
      id: 3,
      nombre: "Artículos de temporada",
      icon: <AiOutlineStar color="red" size={"1.5em"} />,
      cantidad: 4,
    },
    {
      id: 4,
      nombre: "Transporte",
      icon: <FiTruck color="green" size={"1.5em"} />,
      cantidad: 4,
    },
    {
      id: 5,
      nombre: "Herramientas de vigilancia",
      icon: <BsFillCameraVideoFill color="red" size={"1.5em"} />,
      cantidad: 4,
    },
    {
      id: 6,
      nombre: "Herramienta de jardinería",
      icon: <FaLeaf color="green" size={"1.5em"} />,
      cantidad: 4,
    },
    {
      id: 7,
      nombre: "Herramienta de administración",
      icon: <AiFillFile color="red" size={"1.5em"} />,
      cantidad: 4,
    },
    {
      id: 8,
      nombre: "Otros",
      icon: <AiFillTag color="red" size={"1.5em"} />,
      cantidad: 4,
    },
  ];

  return (
    <>
      <h1 className="mb-3 fw-bold">Inventario activo</h1>

      <h6>En esta sección encontrarás las categorias de inventario que actualmente se encuentra activo en el residencial.</h6>

      <div className="card-header border-1 mt-5">
        <div className="row d-flex">
          <div className="col-md-12 text-right">
            <div className="row d-flex align-items-middle justify-content-around">
              <div className="row">
                {inventarioItems.map((item) => (
                  <div className="col-md-3 mb-1" key={item.id}>
                    <div className="card text-center order-visitor-card  p-4">
                      <Link to={`/admin/inventario/${item.nombre}`}>
                        <div className="card-block">
                          <h6 className="mb-4"> {item.nombre} </h6>
                          <h4 className="">
                            {item.icon} {item.cantidad}
                          </h4>
                          <p className="mb-5"></p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
