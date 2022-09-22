import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);
  const totalAmount = getTotalAmount();

  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList,
      total: getTotalAmount(),
    };
    //crear referencia en la base de datos de donde voy a guardar el documento
    const queryRef = collection(db, "orders");
    //agregamos el documento
    console.log(order);
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
  };

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
          <form onSubmit={sendOrder}>
            <input type="text" placeholder="nombre" />
            <input type="text" placeholder="telefono" />
            <input type="email" placeholder="email" />
            <button type="submit">enviar orden</button>
          </form>
          <button>actualizar</button>
          {idOrder !== "" && (
            <div> Su orden fue generada con el id: {idOrder}</div>
          )}
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
