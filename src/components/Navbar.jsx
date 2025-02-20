import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
          <Typography variant="h6" component="div">
            Home
          </Typography>
          <Typography variant="h6" component="div">
            Price Updater
          </Typography>
          <Typography variant="h6" component="div">
            Summary
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
