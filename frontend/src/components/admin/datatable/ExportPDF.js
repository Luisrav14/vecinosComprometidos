export const exportPDF = () => {
  import("jspdf").then((jsPDF) => {
    import("jspdf-autotable").then(() => {
      const doc = new jsPDF.default(0, 0);
      doc.autoTable(exportColumns, posts);
      doc.save("file.pdf");
    });
  });
};
