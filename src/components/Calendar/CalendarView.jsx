import { useMilk } from "../../context/MilkContext";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import dayjs from "dayjs";

const CalendarView = ({ selectedMonth, onMonthChange, onEdit }) => {
  const { milkData } = useMilk();
  const daysInMonth = selectedMonth.daysInMonth();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = selectedMonth.date(i + 1).format("YYYY-MM-DD");
    return { date, ...milkData[date] };
  });

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button variant="outlined" onClick={() => onMonthChange("prev")}>
          ← Previous
        </Button>
        <Typography variant="h5">
          {selectedMonth.format("MMMM YYYY")}
        </Typography>
        <Button variant="outlined" onClick={() => onMonthChange("next")}>
          Next →
        </Button>
      </Box>
      <Grid container spacing={2}>
        {daysArray.map((day, index) => (
          <Grid item xs={3} key={index}>
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                minHeight: 80,
                cursor: "pointer",
                backgroundColor: day.liters ? "#f5f5f5" : "inherit",
                border: day.liters ? "2px solid #1976d2" : "1px solid #ddd",
              }}
              onClick={(e) => onEdit(day.date)}
            >
              <Typography variant="subtitle1">
                {dayjs(day.date).format("DD MMM")}
              </Typography>
              {day.liters ? (
                <>
                  <Typography variant="body2">Milk: {day.liters}L</Typography>
                  <Typography variant="body2">₹{day.totalCost}</Typography>
                </>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No Entry
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarView;
