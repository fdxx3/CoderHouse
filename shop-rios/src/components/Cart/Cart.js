import React from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);
  const totalAmount = getTotalAmount();

  return (
    <div>
      <h1>Carrito</h1>{" "}
      {productCartList.length > 0 ? (
        <div>
          {productCartList.map((item) => (
            <div key={item.id}>
              <h2>Producto: {item.title} </h2>
              <h2>Precio: {item.price} </h2>
              <h2>Cantidad: {item.quantity} </h2>
              <Button
                onClick={() => removeProduct(item.id)}
                size="Small"
                variant="outlined"
                color="primary"
              >
                {" "}
                Eliminar producto
              </Button>
            </div>
          ))}
          <h2>Cantidad Total: {totalAmount} </h2>
          <Button
            onClick={() => clearCart()}
            size="Small"
            variant="outlined"
            color="primary"
          >
            {" "}
            Limpiar Carrito
          </Button>
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
    </div>
  );
};

export default Cart;
