import dayjs from "dayjs";
import { createContext, useEffect } from "react";
import { useState, useContext } from "react";

const MilkContext = createContext();

const getInitialMilkData = (selectedMonth) => {
  const savedData = localStorage.getItem("milkData");
  const allData = savedData ? JSON.parse(savedData) : {};

  // Filter only entries for the selected month
  const filteredData = Object.fromEntries(
    Object.entries(allData).filter(([date]) =>
      dayjs(date).isSame(selectedMonth, "month")
    )
  );

  return filteredData;
};

export const MilkProvider = ({ children }) => {
  const [milkData, setMilkData] = useState(getInitialMilkData());
  const [defaultPrice, setDefaultPrice] = useState(55);

  useEffect(() => {
    localStorage.setItem("milkData", JSON.stringify(milkData));
  }, [milkData]);

  const addMilkEntry = (date, liters) => {
    setMilkData((prevMilkData) => ({
      ...prevMilkData,
      [date]: {
        date,
        liters,
        pricePerLiter: defaultPrice,
        totalCost: liters * defaultPrice,
      },
    }));
  };

  const updatePrice = (newPrice) => {
    setDefaultPrice(newPrice);
  };

  const calculateTotal = () => {
    return Object.values(milkData).reduce(
      (sum, entry) => sum + entry.totalCost,
      0
    );
  };

  const deleteMilkEntry = (date) => {
    setMilkData((prevMilkData) => {
      const updatedMilkData = { ...prevMilkData };
      delete updatedMilkData[date];
      return updatedMilkData;
    });
  };

  const getMonthlySummary = (selectedMonth) => {
    const savedData = localStorage.getItem("milkData");
    const allData = savedData ? JSON.parse(savedData) : {};

    const filteredData = Object.entries(allData).filter(([date]) =>
      dayjs(date).isSame(selectedMonth, "month")
    );

    const totalLiters = filteredData.reduce(
      (sum, [_, entry]) => sum + (entry.liters ?? 0),
      0
    );
    const totalCost = filteredData.reduce(
      (sum, [_, entry]) => sum + (entry.totalCost ?? 0),
      0
    );

    return { totalLiters, totalCost };
  };

  return (
    <MilkContext.Provider
      value={{
        milkData,
        addMilkEntry,
        updatePrice,
        deleteMilkEntry,
        calculateTotal,
        defaultPrice,
        getMonthlySummary,
      }}
    >
      {children}
    </MilkContext.Provider>
  );
};

export const useMilk = () => {
  return useContext(MilkContext);
};
