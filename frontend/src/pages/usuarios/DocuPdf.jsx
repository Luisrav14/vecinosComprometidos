import React, { useState } from 'react';
import { Document, Page,Text } from 'react-pdf';


export const DocuPdf= () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        <Text>hola</Text>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}