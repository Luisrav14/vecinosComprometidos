export const exportPDF = (exportColumns, data) => {
  import("jspdf").then((jsPDF) => {
    import("jspdf-autotable").then(() => {
      const doc = new jsPDF.default(0, 0);
      doc.autoTable(exportColumns, data);
      doc.save("file.pdf");
    });
  });
};
