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

const Cart = () => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);
  const totalAmount = getTotalAmount();

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
                      Precio: {item.price}
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
          <h2>Precio Total: {totalAmount} </h2>
          <Button
            onClick={() => clearCart()}
            size="Small"
            variant="outlined"
            color="primary"
          >
            {" "}
            Limpiar Carrito
          </Button>
          <NavLink to="/OrderForm">
            <Button size="Small" variant="outlined" color="primary">
              Ir a Pagar
            </Button>
          </NavLink>
        </div>
      ) : (
        <div>
          <div>No hay items en el carrito!</div>
          <NavLink to="/Catalogo">
            <Button size="Small" variant="outlined" color="primary">
              Volver al catalogo
            </Button>
          </NavLink>
        </div>
      )}
    </Box>
  );
};

export default Cart;
