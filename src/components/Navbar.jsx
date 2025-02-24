import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Milk Tracker
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
          <Link
            to="/price-updater"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" component="div">
              Price Updater
            </Typography>
          </Link>
          <Link
            to="/summary"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" component="div">
              Summary
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
