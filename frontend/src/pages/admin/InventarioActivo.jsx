import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import {AiFillIdcard,AiFillFile,AiOutlineStar,AiFillTag} from "react-icons/ai";
import Swal from "sweetalert2";
import { DataTableComponent } from "../../components/admin/datatable/DataTableComponent";
import { ModalWithBtn } from "../../components";



export const InventarioActivo = () => {




  return (
    <>
      <h1 className="mb-3 fw-bold">Inventario activo</h1>

      <h6>En esta sección encontrarás las categorias de inventario que actualmente se encuentra activo en el residencial.</h6>
      

        <div className="card-header border-1 mt-5">

          <div className="row d-flex">

            <div className="col-md-12 text-right">
            <div class="row d-flex align-items-middle justify-content-around">
                                                        
                                                            <div class="row">
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card  p-4">
                                                                        <a href="inventario-table.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Accesos</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <AiFillIdcard color="red" size={"1.5em"}/> 15
                                                                               
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                                
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-areas.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Areas comunes</h6>
                                                                                <h4 class="m-b-15">
                                                                                <BiCoffee color="green" size={"1.5em"}/> 56
                                                                                  
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                
                                                           
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-temporada.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Artículos de temporada</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <AiOutlineStar color="red" size={"1.5em"}/> 4
                                                                                 
                                                                                   
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-transporte.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Transporte</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <FiTruck color="green" size={"1.5em"}/> 2 
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-vigilancia.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Herramienta de Vigilancia</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <BsFillCameraVideoFill color="red" size={"1.5em"}/> 2 
                                                                                
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-jardineria.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Herramienta de Jardinería</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <FaLeaf color="green" size={"1.5em"}/> 2 
                                                                                  
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                
                                                                
                                                                 <div class="col-md-3 mb-1">

                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-admin.php">
                                                                            <div class="card-block">
                                                                                <h6 class="m-b-0">Herramienta de Administración</h6>
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <AiFillFile color="red" size={"1.5em"}/> 2 
                                                                                  
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                
                                                              
                                                                
                                                                 <div class="col-md-3 mb-1">


                                                                    <div class="card text-center order-visitor-card p-4">
                                                                        <a href="inventario-table-otros.php">
                                                                            <div class="card-block">
                                                                                <h6 class="mb-4">Otros</h6>
                                                                               
                                                                                <h4 class="m-t-15 m-b-15">
                                                                                <AiFillTag color="red" size={"1.5em"}/> 2 
                                                                                  
                                                                                </h4>
                                                                                <p class="m-b-0"></p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                      
                                                        
                                                            </div>
                                                        </div>
                                                    </div>

            
         
        
    </>
  );
};
