import React, { useState } from "react";
import { CartContext } from "../Context/CartContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
const OrderForm = () => {
  const { productCartList, removeProduct, clearCart, getTotalAmount } =
    useContext(CartContext);

  const [idOrder, setIdOrder] = useState("");
  const sendOrder = (e) => {
    console.log(e);
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[2].value,
        email: e.target[4].value,
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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={sendOrder}
    >
      <Box justifyContent="center" alignItems="center" sx={{ p: 1 }}>
        <TextField required id="outlined-required" label="Nombre" />
        <TextField required id="outlined-required" label="Telefono" />
        <TextField required id="outlined-required" label="E-Mail" />
      </Box>
      <Button type="submit" variant="outlined" color="primary">
        enviar orden
      </Button>

      {/* <Button variant="outlined" color="primary">
        actualizar
      </Button> */}
      {idOrder !== "" && <div> Su orden fue generada con el id: {idOrder}</div>}
    </Box>
  );
};

export default OrderForm;
