import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPDF = (fileName, headers, body) => {
  const doc = new jsPDF();

  autoTable(doc, {
    head: [["Name", "Email", "Country"]],
    body: [
      ["David", "david@example.com", "Sweden"],
      ["Castille", "castille@example.com", "Spain"],
    ],
  });

  doc.save("table.pdf");
};
