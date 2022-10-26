import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./NavBar.css";
import Avatar from "@mui/material/Avatar";
import CartDrawer from "../CartDrawer/CartDrawer";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { LogoutOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunk";
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
    Route: "/catalogo/ofertas",
  },
  {
    Name: "Destacados",
    Route: "/catalogo/destacados",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { productCartList, getTotalProducts } = useContext(CartContext);
  const [abrir, setAbrir] = useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  const { displayName, photoURL } = useSelector((state) => state.auth);
  console.log(displayName);
  console.log(photoURL);
  return (
    <AppBar position="sticky">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NavLink
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.Name}
                  onClick={handleCloseNavMenu}
                  className="button"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "claseActive" : "claseInactive"
                    }
                    to={page.Route}
                  >
                    {" "}
                    <Typography textAlign="center" key={page.Name}>
                      <Button key={page.Name}>{page.Name}</Button>
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NavLink
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                key={page.Name}
                className={({ isActive }) =>
                  isActive ? "claseActive" : "claseInactive"
                }
                to={page.Route}
              >
                <Button
                  key={page.Name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  color="inherit"
                >
                  {page.Name}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={photoURL} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  className="button"
                >
                  <Typography textAlign="center">
                    {" "}
                    <Button>{setting}</Button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            {productCartList.length > 0 && (
              <>
                <Button onClick={() => accionAbrir()}>
                  <CartWidget></CartWidget>
                </Button>
              </>
            )}
            <CartDrawer
              variant="temporary"
              open={abrir}
              onClose={accionAbrir}
            ></CartDrawer>
          </Box>
          <Box sx={{ ml: "10px" }}>
            <IconButton color="error" onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
