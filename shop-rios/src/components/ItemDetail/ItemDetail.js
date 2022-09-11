import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const { addProduct } = useContext(CartContext);
  const [loading, setloading] = useState(true);
  const [products, setproducts] = React.useState();

  const AddToCart = (selectedNumber) => {
    console.log("onadd", selectedNumber);

    const newProduct = { ...data, quantity: selectedNumber };
    setproducts(selectedNumber);
    addProduct(newProduct);
    console.log("newproduct", newProduct);
  };
  useEffect(() => {
    setloading(false);
  }, []);

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
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
