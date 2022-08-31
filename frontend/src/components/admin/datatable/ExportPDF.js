import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPDF = (headers, body, fileName) => {
  const doc = new jsPDF();

  const headersExport = [];
  const bodyExport = [];

  headers.headers.forEach((row) => {
    headersExport.push(row.name);
  });

  headers.data.forEach((row) => {
    bodyExport.push(row);
  });
  const dataExport = [];
  bodyExport.forEach((row) => {
    dataExport.push(row.id);
  });

  console.log(headersExport);
  console.log(dataExport);

  autoTable(doc, {
    head: headersExport,
    body: bodyExport,
  });

  doc.save(`${fileName}.pdf`);
};
