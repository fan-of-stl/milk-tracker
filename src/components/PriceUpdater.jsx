import React, { useState } from "react";
import { useMilk } from "../context/MilkContext";
import { Box, Button, TextField } from "@mui/material";

const PriceUpdater = () => {
  const { updatePrice, defaultPrice } = useMilk();

  const [newPrice, setNewPrice] = useState();

  const handleUpdate = () => {
    if (newPrice > 0) {
      updatePrice(parseFloat(newPrice));
      alert("Price updated successfully!");
    } else {
      alert("Please enter a valid price.");
    }
  };
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
      <TextField
        label="Price per Liter"
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Price
      </Button>
    </Box>
  );
};

export default PriceUpdater;
