

export const DataTableComponent = ({ columns, data }) => {
  return <DataTable columns={columns} data={data} pagination expandableRows expandableRowsComponent={ExpandedComponent} paginationComponentOptions={paginationComponentOptions} />;
};
