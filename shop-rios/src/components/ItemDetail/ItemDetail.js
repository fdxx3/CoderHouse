import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import CartWidget from "../CartWidget/CartWidget";
import Button from "@material-ui/core/Button";
import CartDrawer from "../CartDrawer/CartDrawer";

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
    <div className="item-container">
      <h1>Item Detail Container</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="item-detail">
          <img src={data.pictureURL}></img>

          <div>{data.title} </div>
          <div>{data.price} </div>
          <div>{data.description} </div>

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
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
