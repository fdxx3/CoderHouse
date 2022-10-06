import React, { useState } from "react";
import { Drawer } from "@mui/material";
import CartContainer from "../CartContainer/CartContainer";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
const CartDrawer = (props) => {
  const cerrar = props.onClose;

  return (
    <>
      <Box>
        <Drawer
          open={props.open}
          anchor="right"
          PaperProps={{ sx: { background: "#fff" } }}
          variant={"temporary"}
          onClose={props.onClose}
        >
          <Box>
            <CartContainer></CartContainer>
          </Box>
          <Button onClick={() => cerrar()}>Cerrar Carrito</Button>
        </Drawer>
      </Box>
    </>
  );
};

export default CartDrawer;
