import Select from "react-select";
import { BsSearch, BsTable } from "react-icons/bs";

export const FiltersMonthYear = () => {
  return (
    <div className="col-md-12 mb-3">
      <div className="d-flex px-5 justify-content-center">
        <form className="form-inline col-md-5 col-sm-12">
          <select className="form-control px-5 mr-3">
            <option value="">Selecciona un año</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <button className="btn btn-primary my-sm-2 ">
            <BsSearch /> Buscar
          </button>
        </form>
        <form className="form-inline col-md-5 col-sm-12">
          <select className="form-control px-5 mr-3">
            <option value="">Selecciona un mes</option>
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
          <button className="btn btn-primary my-sm-2 ">
            <BsSearch /> Buscar
          </button>
        </form>
        <button className="btn btn-primary col-md-2 col-sm-12 my-sm-2">
          <BsTable /> Mostrar todo
        </button>
      </div>
    </div>
  );
};
