import { BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";
import { exportPDF } from "./ExportPDF";

export const ExportTable = (headers, data, fileName = "file") => {
  return (
    <div className="col-md-12 d-flex my-3 justify-content-start">
      <input type="search" className="form-control col-md-3" placeholder="Buscar..." />
      <button className="btn btn-primary mx-2" onClick={() => exportPDF(headers, data, fileName)}>
        <BsFileEarmarkPdf /> PDF
      </button>
      <button className="btn btn-primary mx-2">
        <BsFileEarmarkExcel /> Excel
      </button>
    </div>
  );
};
