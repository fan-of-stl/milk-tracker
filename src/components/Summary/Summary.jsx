import React from "react";
import { useMilk } from "../../context/MilkContext";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import PDFGenerator from "../Pdf/PDFGenerator";

const Summary = () => {
  const { milkData, calculateTotal } = useMilk();

  const totalLiters = Object.values(milkData).reduce(
    (sum, entry) => sum + (entry.liters ?? 0),
    0
  );
  const totalCost = calculateTotal();
  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" align="center">
            Monthly Summary
          </Typography>
          <Typography variant="body1">Total Liters: {totalLiters} L</Typography>
          <Typography variant="body1">Total Cost: ₹{totalCost}</Typography>
          <PDFGenerator />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Summary;
