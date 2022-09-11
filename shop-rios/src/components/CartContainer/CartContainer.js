import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { productCartList, removeProduct, clearCart } = useContext(CartContext);

  return (
    <div>
      <div>Carrito</div>
      {productCartList.map((item) => (
        <div key={item.id}>
          <p> {item.title} </p>
          <p> {item.price} </p>
          <p> {item.quantity} </p>
          <button onClick={() => removeProduct(item.id)}>
            {" "}
            Eliminar producto
          </button>
        </div>
      ))}
      <button onClick={() => clearCart()}> Limpiar Carrito</button>
    </div>
  );
};

export default CartContainer;
