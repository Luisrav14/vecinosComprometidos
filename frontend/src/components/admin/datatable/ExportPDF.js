import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPDF = (headers, body, fileName) => {
  const doc = new jsPDF();

  const headersExport = headers.headers;
  const bodyExport = headers.data;

  headersExport.forEach((row) => {
    headersExport.push(row.name);
  });

  // body.forEach((row) => {
  //   bodyExport.push(row);
  // });

  console.log(headersExport);
  // console.log(bodyExport);

  autoTable(doc, {
    head: headersExport,
    body: bodyExport,
  });

  doc.save(`${fileName}.pdf`);
};
