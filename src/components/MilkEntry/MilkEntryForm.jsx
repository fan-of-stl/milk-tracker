import { useState, useEffect } from "react";
import { useMilk } from "../../context/MilkContext";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const MilkEntryForm = ({ selectedDate, setSelectedDate }) => {
  const { addMilkEntry, deleteMilkEntry, defaultPrice, milkData } = useMilk();
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState(defaultPrice);

  useEffect(() => {
    if (selectedDate && milkData[selectedDate]) {
      setLiters(milkData[selectedDate].liters.toString());
    } else {
      setLiters(""); // Reset if no entry exists
    }
  }, [selectedDate, milkData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || liters <= 0) {
      alert("Please enter a valid date and liters.");
      return;
    }
    addMilkEntry(selectedDate, parseFloat(liters));
    setSelectedDate(null); // Close form after saving
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      deleteMilkEntry(selectedDate);
      setSelectedDate(null); // Close form after deleting
    }
  };

  return (
    <Dialog open={!!selectedDate} onClose={() => setSelectedDate(null)}>
      <DialogTitle>Edit Milk Entry</DialogTitle>
      <DialogContent>
        <TextField
          label="Liters"
          type="number"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="Price per Liter"
          type="number"
          value={price}
          disabled
          fullWidth
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSelectedDate(null)}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Entry
        </Button>
        {selectedDate && milkData[selectedDate] && (
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MilkEntryForm;
