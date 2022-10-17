import React from "react";
import Cart from "../Cart/Cart";
import Box from "@mui/material/Box";

const CartContainer = (props) => {
  return (
    <Box>
      <Cart onClose={props}></Cart>
    </Box>
  );
};

export default CartContainer;
