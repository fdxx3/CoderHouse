import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// const pages = ["Products", "Pricing", "Blog"];
const pages = [
  {
    Name: "Catalogo",
    Route: "/catalogo",
  },
  {
    Name: "Quienes somos",
    Route: "/nosotros",
  },
  {
    Name: "Contacto",
    Route: "/contacto",
  },
  {
    Name: "Ofertas",
    Route: "/catalogo/:ofertas",
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/"
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </NavLink>
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              anchorEl={anchorEl}
              open={false}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {" "}
              {pages.map((page) => (
                <MenuItem key={page.Name}>
                  <Typography key={page.Name} textAlign="center">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "claseActive" : "claseInactive"
                      }
                      to={page.Route}
                    >
                      {page.Name}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 19,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/"
            >
              Shop-Rios
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.Name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "claseActive" : "claseInactive"
                  }
                  to={page.Route}
                >
                  {page.Name}
                </NavLink>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Carrito De Compras">
              <IconButton sx={{ p: 0, color: "inherit" }}>
                <ShoppingCart />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
