import React, { useState } from "react";
import MilkEntryForm from "../components/MilkEntry/MilkEntryForm";
import CalendarView from "../components/Calendar/CalendarView";
import MonthlySummary from "../components/Summary/Monthly/MonthlySummary";
import dayjs from "dayjs";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleMonthChange = (direction) => {
    setSelectedMonth((prev) =>
      dayjs(prev)[direction === "prev" ? "subtract" : "add"](1, "month")
    );
  };
  return (
    <>
      <MilkEntryForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <CalendarView
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
        onEdit={setSelectedDate}
      />
      <MonthlySummary
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />
    </>
  );
};

export default Home;
