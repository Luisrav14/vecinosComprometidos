import { useEffect, useState } from "react";

import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { BsFileEarmarkExcel, BsFileEarmarkPdf } from "react-icons/bs";

import "primereact/resources/themes/saga-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export const DataTableComponent = ({ columns, data }) => {
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

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
      saveAsExcelFile(excelBuffer, "file");
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
    console.log(posts);
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, posts);
        doc.save("file.pdf");
      });
    });
  };

  const header = (
    <div className="d-flex mx-2 pb-3 row">
      <input className="form-control col-md-12 w-25 mx-2" type="search" placeholder="Buscar..." />
      <Button type="button" className="btn btn-primary bg-primary col-md-2 mr-2" icon={<BsFileEarmarkPdf />} onClick={exportPDF} data-pr-tooltip="PDF" />
      <Button type="button" className="btn btn-primary bg-primary col-md-2 mr-2" icon={<BsFileEarmarkExcel />} onClick={exportExcel} data-pr-tooltip="XLS" />
    </div>
  );

  return (
    <DataTable
      className="text-center"
      resizableColumns
      columnResizeMode="fit"
      showGridlines
      rows={10}
      value={posts}
      header={header}
      responsiveLayout="scroll"
      dataKey="id"
      emptyMessage="No hay información para mostrar." //
      paginator
      rowsPerPageOptions={[10, 20, 50, 100]}
      currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} registros"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    >
      {columns.map((col) => {
        return <Column field={col.selector} header={col.name} style={{ width: "auto" }} />;
      })}
    </DataTable>
  );
};
