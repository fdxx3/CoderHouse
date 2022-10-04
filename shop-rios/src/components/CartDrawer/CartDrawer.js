import React, { useState } from "react";
import { Drawer } from "@mui/material";
import CartContainer from "../CartContainer/CartContainer";
import { Button } from "@material-ui/core";

const CartDrawer = (props) => {
  const cerrar = props.onClose;

  return (
    <>
      <Drawer
        open={props.open}
        anchor="right"
        PaperProps={{ sx: { width: 500, background: "#fff" } }}
        variant={props.variant}
        onClose={props.onClose}
      >
        <CartContainer></CartContainer>
        <Button onClick={() => cerrar()}>Cerrar Carrito</Button>
      </Drawer>
    </>
  );
};

export default CartDrawer;
