import React from "react";
import { Drawer } from "@mui/material";
const CartDrawer = () => {
  return (
    <Drawer
      open={true}
      anchor="right"
      PaperProps={{ sx: { width: 500, background: "#fff" } }}
    >
      {" "}
      <h1> My cart</h1>
    </Drawer>
  );
};

export default CartDrawer;
