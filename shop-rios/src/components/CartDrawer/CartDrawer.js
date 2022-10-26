import React, { useState } from "react";
import { Drawer } from "@mui/material";
import CartContainer from "../CartContainer/CartContainer";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
const CartDrawer = (props) => {
  const cerrar = props.onClose;

  return (
    <>
      <Box>
        <Drawer
          open={props.open}
          anchor="right"
          PaperProps={{ sx: { minWidth: 200, background: "#fff" } }}
          variant={"temporary"}
          onClose={props.onClose}
        >
          <Box component="span">
            <CartContainer onClose={props.onClose}></CartContainer>
          </Box>
          <Box component="span" sx={{ p: 2, border: "1px " }}>
            <NavLink to="/Catalogo">
              <Button
                onClick={() => cerrar()}
                size="Small"
                variant="outlined"
                color="primary"
              >
                Volver al catalogo
                <ArrowBackIcon></ArrowBackIcon>
              </Button>
            </NavLink>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default CartDrawer;
