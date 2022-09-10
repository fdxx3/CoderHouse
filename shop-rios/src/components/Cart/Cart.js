import React from "react";
import ThemeContext from "../Context/ThemeContext";

const Cart = () => {
  return (
    <div>
      <div>Carrito</div>
      <ThemeContext.Consumer>
        {(value) => {
          return <p> {value.texto} </p>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Cart;
