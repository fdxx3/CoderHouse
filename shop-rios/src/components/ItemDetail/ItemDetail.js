import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Button from "@material-ui/core/Button";
import CartDrawer from "../CartDrawer/CartDrawer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";

const ItemDetail = ({ data }, props) => {
  const { addProduct, getTotalProducts } = useContext(CartContext);
  const [loading, setloading] = useState(true);
  const [products, setproducts] = React.useState();
  const [abrir, setAbrir] = useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  const AddToCart = (selectedNumber) => {
    const newProduct = { ...data, quantity: selectedNumber };
    setproducts(selectedNumber);
    addProduct(newProduct);
  };

  useEffect(() => {
    setloading(false);
  }, []);

  const cantidad = getTotalProducts();

  return (
    <Box>
      <h1>Item Detail Container</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <Box>
          <Box>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={data.pictureURL}
                  alt=""
                />
              </CardActionArea>
              <CardContent>
                <h4>{data.title} </h4>
                <h6>Precio: ${data.price} </h6>
              </CardContent>

              <div>{data.description} </div>
            </Card>
          </Box>

          <ItemCount
            stock={data.stock}
            initial={data.initial}
            AddToCart={AddToCart}
          />
          <CartDrawer
            variant="temporary"
            open={abrir}
            onClose={accionAbrir}
          ></CartDrawer>
          {cantidad > 0 && (
            <Button
              size="Small"
              variant="outlined"
              color="primary"
              onClick={() => accionAbrir()}
            >
              Terminar Compra
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ItemDetail;
