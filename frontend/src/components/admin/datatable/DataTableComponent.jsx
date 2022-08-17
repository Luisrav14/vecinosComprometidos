import DataTable from "react-data-table-component";

import { RowExpandedComponent } from "./RowExpandedComponent";
import { PaginationOptionsComponent } from "./paginationOptionsComponent";
import { customStyles } from "./customStyles";

export const DataTableComponent = ({ columns, data, expandible = false }) => {
  return (
    <DataTable
      data={data}
      columns={columns}
      pagination
      expandableRows={expandible} // Acordion en rows
      expandableRowsComponent={RowExpandedComponent}
      paginationComponentOptions={PaginationOptionsComponent}
      customStyles={customStyles}
    />
  );
};
