import DataTable from "react-data-table-component";

import { RowExpandedComponent } from "./RowExpandedComponent";
import { PaginationOptionsComponent } from "./paginationOptionsComponent";
import { customStyles } from "./customStyles";
import { ExportTable } from "./ExportTable";

export const DataTableComponent = ({ columns, data, expandible = false, exportOptions = true }) => {
  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        pagination
        expandableRows={expandible} // Acordion rows
        expandableRowsComponent={RowExpandedComponent}
        paginationComponentOptions={PaginationOptionsComponent}
        customStyles={customStyles}
        subHeader={exportOptions}
        subHeaderComponent={<ExportTable headers={columns} data={data} />}
      />
    </>
  );
};
