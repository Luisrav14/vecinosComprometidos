import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { RowExpandedComponent } from "./RowExpandedComponent";
import { PaginationOptionsComponent } from "./paginationOptionsComponent";
import { customStyles } from "./customStyles";
import { ExportTable } from "./ExportTable";

export const DataTableComponent = ({ columns, data, expandible = false, exportOptions = true }) => {
  const tableData = {
    columns,
    data,
  };
  return (
    <>
      {/* {exportOptions && <ExportTable headers={columns} data={data} />} */}
      <DataTableExtensions {...tableData}>
        <DataTable
          pagination
          expandableRows={expandible} // Acordion rows
          expandableRowsComponent={RowExpandedComponent}
          paginationComponentOptions={PaginationOptionsComponent}
          customStyles={customStyles}
        />
      </DataTableExtensions>
    </>
  );
};
