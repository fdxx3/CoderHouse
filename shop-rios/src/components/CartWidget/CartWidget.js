import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = (props) => {
  const { productCartList, getTotalProducts } = useContext(CartContext);
  const totalProducts = getTotalProducts();
  return (
    <div>
      {productCartList.length > 0 && (
        <>
          <StyledBadge
            display={totalProducts === 0 ? "none" : undefined}
            badgeContent={totalProducts}
            color="secondary"
          >
            <ShoppingCartIcon sx={{ fontSize: 30, color: "white" }} />
          </StyledBadge>
        </>
      )}
    </div>
  );
};

export default CartWidget;
