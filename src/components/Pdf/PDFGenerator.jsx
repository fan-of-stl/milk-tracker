import React from "react";
import { useMilk } from "../../context/MilkContext";
import jsPDF from "jspdf";
import { Button } from "@mui/material";

const PDFGenerator = () => {
  const { milkData, calculateTotal } = useMilk();

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Milk Tracker - Monthly Invoice", 20, 20);

    let yPosition = 40;
    doc.setFontSize(12);
    doc.text("Date         | Liters | Price/Ltr | Total Cost", 20, yPosition);
    doc.line(20, yPosition + 2, 190, yPosition + 2);
    yPosition += 10;

    Object.values(milkData).forEach((entry) => {
      console.log(entry);

      doc.text(
        `${entry.date}    ${entry.liters} L    ₹${entry.pricePerLtr}    ₹${entry.totalCost}`,
        20,
        yPosition
      );
      yPosition += 10;
    });

    doc.line(20, yPosition, 190, yPosition);
    doc.text(`Total Amount: ₹${calculateTotal()}`, 20, yPosition + 10);

    doc.save("Milk_Invoice.pdf");
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      onClick={generatePDF}
    >
      Download PDF Invoice
    </Button>
  );
};

export default PDFGenerator;
