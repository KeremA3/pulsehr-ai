import jsPDF from "jspdf";
import * as XLSX from "xlsx";

/* PDF EXPORT */

export const exportEmployeesPDF = (

  employees

) => {

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text(
    "PulseHR AI - Employee Report",
    20,
    20
  );

  let y = 40;

  employees.forEach(
    (employee, index) => {

      doc.setFontSize(14);

      doc.text(

        `${index + 1}. ${employee.name} | ${employee.department}`,

        20,
        y

      );

      y += 12;
    }
  );

  doc.save(
    "pulsehr-employees.pdf"
  );
};

/* EXCEL EXPORT */

export const exportEmployeesExcel = (

  employees

) => {

  const worksheet =
    XLSX.utils.json_to_sheet(
      employees
    );

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(

    workbook,
    worksheet,
    "Employees"

  );

  XLSX.writeFile(

    workbook,

    "pulsehr-employees.xlsx"

  );
};