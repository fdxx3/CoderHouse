import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useTheme } from "@mui/material/styles";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Divider from "@mui/material/Divider";
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
  const theme = useTheme();
  return (
    <div>
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
