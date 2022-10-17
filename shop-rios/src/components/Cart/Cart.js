import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PaymentIcon from "@mui/icons-material/Payment";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const Cart = (props) => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);
  const totalAmount = getTotalAmount();
  const cerrar = props.onClose.onClose;
  return (
    <Box>
      <h1>Carrito</h1>{" "}
      {productCartList.length > 0 ? (
        <div>
          {productCartList.map((item) => (
            <div key={item.id}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={item.pictureURL}
                  alt=""
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Producto: {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Precio Unitario: $ {item.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Cantidad: {item.quantity}
                    </Typography>
                    <Button
                      onClick={() => removeProduct(item.id)}
                      size="Small"
                      variant="outlined"
                      color="primary"
                    >
                      {" "}
                      Eliminar producto
                    </Button>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>
              <Divider></Divider>
            </div>
          ))}
          <Box sx={{ p: 2, border: "1px " }}>
            <h2>Precio Total: $ {totalAmount} </h2>
          </Box>
          <Box sx={{ p: 2, border: "1px " }}>
            <NavLink to="/OrderForm">
              <Button
                size="Small"
                variant="outlined"
                color="primary"
                onClick={() => cerrar()}
              >
                Ir a Pagar
                <PaymentIcon></PaymentIcon>
              </Button>
            </NavLink>
          </Box>
          <Box sx={{ p: 2, border: "1px " }}>
            {" "}
            <Button
              onClick={() => clearCart()}
              size="Small"
              variant="outlined"
              color="primary"
            >
              {" "}
              Limpiar Carrito
              <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
            </Button>
          </Box>
        </div>
      ) : (
        <div>
          <div>No hay items en el carrito!</div>
        </div>
      )}
    </Box>
  );
};

export default Cart;
