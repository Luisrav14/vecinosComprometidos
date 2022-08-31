import { useEffect, useState } from "react";

import axios from "axios";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";

export const DataTableComponent = ({ columns, data }) => {
  const [posts, setPosts] = useState(data);

  let i;

  const exportColumns = columns.map((col) => ({
    title: col.name,
    dataKey: col.id,
  }));

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const workSheet = xlsx.utils.json_to_sheet(posts);
      const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workBook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "posts");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((FileSaver) => {
      let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
    });
  };

  const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, posts);
        doc.save("posts.pdf");
      });
    });
  };

  const header = (
    <div className="d-flex mx-2 pb-3 ">
      <input className="form-control w-25 mx-2 " type="search" placeholder="Buscar..." />
      <Button type="button" icon={<BsFileEarmarkPdf />} onClick={exportExcel} className="btn btn-primary bg-primary mr-2" data-pr-tooltip="XLS" />
      <Button type="button" icon={<BsFileEarmarkExcel />} onClick={exportPDF} className="btn btn-primary bg-primary mr-2" data-pr-tooltip="PDF" />
    </div>
  );

  return (
    <div className="p-3">
      <DataTable
        className="table table-striped"
        rows={10}
        value={posts}
        header={header}
        responsiveLayout="scroll"
        dataKey="id"
        paginator
        emptyMessage="No hay información para mostrar." //
        currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} registros"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      >
        {columns.map((col) => {
          return <Column field={col.selector} sortable header={col.name} style={{ width: "auto", textAlign: "center" }} />;
        })}
      </DataTable>
    </div>
  );
};
