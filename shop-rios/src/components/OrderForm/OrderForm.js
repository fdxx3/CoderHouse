import React, { useState } from "react";
import { CartContext } from "../Context/CartContext";

import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
const OrderForm = () => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);

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
      {" "}
      <form onSubmit={sendOrder}>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="telefono" />
        <input type="email" placeholder="email" />
        <button type="submit">enviar orden</button>
      </form>
      <button>actualizar</button>
      {idOrder !== "" && <div> Su orden fue generada con el id: {idOrder}</div>}
    </div>
  );
};

export default OrderForm;
