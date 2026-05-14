import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

export const exportEmployeesToPDF = (

  employees

) => {

  const doc =
    new jsPDF();

  /* TITLE */

  doc.setFontSize(22);

  doc.text(

    "PulseHR AI - Çalışan Raporu",

    14,
    20

  );

  /* TABLE */

  autoTable(doc, {

    startY: 35,

    head: [[

      "Ad Soyad",
      "Departman"

    ]],

    body: employees.map(
      (employee) => [

        employee.name,
        employee.department

      ]
    )

  });

  /* SAVE */

  doc.save(
    "pulsehr-calisan-raporu.pdf"
  );
};