import { BsPlusLg } from "react-icons/bs";

export const BaseDatosGeneral = () => {
  return (
    <>
      <h1 className="mb-3 fw-bold">Base de datos general</h1>
      <div className="card">
        <div className="card-header border-bottom border-1">
          <div className="row d-flex">
            <h5 className="card-title col-md-6 pt-2">Propietarios</h5>
            <div className="col-md-6 text-right">
              <a href="agregar-propietario" className="btn btn-primary">
                <BsPlusLg /> Agregar
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div id="datatables-reponsive_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_length" id="datatables-reponsive_length">
                  <label>
                    Mostrar{" "}
                    <select name="datatables-reponsive_length" aria-controls="datatables-reponsive" className="form-select form-select-sm">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>{" "}
                    Filas
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="datatables-reponsive_filter" className="dataTables_filter">
                  <label>
                    Buscar:
                    <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="datatables-reponsive" />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <table id="datatables-reponsive" className="table table-striped dataTable no-footer dtr-inline collapsed" style={{ width: "100%" }} aria-describedby="datatables-reponsive_info">
                  <thead>
                    <tr>
                      <th className="sorting sorting_asc" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "74px" }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                        Nombre
                      </th>
                      <th className="sorting" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "93px" }} aria-label="Position: activate to sort column ascending">
                        Dirección
                      </th>
                      <th className="sorting" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "60px" }} aria-label="Office: activate to sort column ascending">
                        Cuota Suscripción
                      </th>
                      <th className="sorting" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "27px" }} aria-label="Age: activate to sort column ascending">
                        Cuota Efectivo
                      </th>
                      <th className="sorting" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "65px" }} aria-label="Start date: activate to sort column ascending">
                        Método de pago
                      </th>
                      <th className="sorting dtr-hidden" tabIndex="0" aria-controls="datatables-reponsive" rowSpan="1" colSpan="1" style={{ width: "0px", display: "none" }} aria-label="Salary: activate to sort column ascending">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className="dtr-control sorting_1" tabIndex="0">
                        Airi Satou
                      </td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>33</td>
                      <td>2018/11/28</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $162,700
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="sorting_1 dtr-control">Angelica Ramos</td>
                      <td>Chief Executive Officer (CEO)</td>
                      <td>London</td>
                      <td>47</td>
                      <td>2019/10/09</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $1,200,000
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="dtr-control sorting_1" tabIndex="0">
                        Ashton Cox
                      </td>
                      <td>Junior Technical Author</td>
                      <td>San Francisco</td>
                      <td>66</td>
                      <td>2019/01/12</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $86,000
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="sorting_1 dtr-control">Bradley Greer</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>41</td>
                      <td>2022/10/13</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $132,000
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="sorting_1 dtr-control">Brenden Wagner</td>
                      <td>Software Engineer</td>
                      <td>San Francisco</td>
                      <td>28</td>
                      <td>2021/06/07</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $206,850
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="dtr-control sorting_1" tabIndex="0">
                        Brielle Williamson
                      </td>
                      <td>Integration Specialist</td>
                      <td>New York</td>
                      <td>61</td>
                      <td>2022/12/02</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $372,000
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="sorting_1 dtr-control">Bruno Nash</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>38</td>
                      <td>2021/05/03</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $163,500
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="sorting_1 dtr-control">Caesar Vance</td>
                      <td>Pre-Sales Support</td>
                      <td>New York</td>
                      <td>21</td>
                      <td>2021/12/12</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $106,450
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="sorting_1 dtr-control">Cara Stevens</td>
                      <td>Sales Assistant</td>
                      <td>New York</td>
                      <td>46</td>
                      <td>2021/12/06</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $145,600
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="dtr-control sorting_1" tabIndex="0">
                        Cedric Kelly
                      </td>
                      <td>Senior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>2022/03/29</td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        $433,060
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div className="dataTables_info" id="datatables-reponsive_info" role="status" aria-live="polite">
                  Mostrando 1 a 10 de 57 entradas
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate paging_simple_numbers" id="datatables-reponsive_paginate">
                  <ul className="pagination">
                    <li className="paginate_button page-item previous disabled" id="datatables-reponsive_previous">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="0" tabIndex="0" className="page-link">
                        Anterior
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="1" tabIndex="0" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="2" tabIndex="0" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="3" tabIndex="0" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="4" tabIndex="0" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="5" tabIndex="0" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="6" tabIndex="0" className="page-link">
                        6
                      </a>
                    </li>
                    <li className="paginate_button page-item next" id="datatables-reponsive_next">
                      <a href="#" aria-controls="datatables-reponsive" data-dt-idx="7" tabIndex="0" className="page-link">
                        Siguiente
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
