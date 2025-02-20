import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import { useMilk } from "../../../context/MilkContext";

const MonthlySummary = ({ selectedMonth, onMonthChange }) => {
  const { getMonthlySummary } = useMilk();
  const { totalLiters, totalCost } = getMonthlySummary(selectedMonth);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Milk Summary - ${selectedMonth.format("MMMM YYYY")}`, 20, 20);
    doc.setFontSize(14);
    doc.text(`Total Liters: ${totalLiters} L`, 20, 40);
    doc.text(`Total Cost: ₹${totalCost}`, 20, 50);
    doc.save(`Milk_Summary_${selectedMonth.format("MMMM_YYYY")}.pdf`);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button variant="outlined" onClick={() => onMonthChange("prev")}>
          ← Previous
        </Button>
        <Typography variant="h6">
          {selectedMonth.format("MMMM YYYY")}
        </Typography>
        <Button variant="outlined" onClick={() => onMonthChange("next")}>
          Next →
        </Button>
      </Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1">Total Liters: {totalLiters} L</Typography>
          <Typography variant="body1">Total Cost: ₹{totalCost}</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={generatePDF}
          >
            Download PDF
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MonthlySummary;
