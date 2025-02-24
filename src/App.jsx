import { Container, Typography } from "@mui/material";
import Summary from "./components/Summary/Summary";
import Navbar from "./components/Navbar";
import PriceUpdater from "./components/PriceUpdater";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Milk Tracker
      </Typography>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price-updater" element={<PriceUpdater />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
