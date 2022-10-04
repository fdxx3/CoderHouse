import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productCartList, setproductCartList] = useState([]);

  const [cantidad, setCantidad] = useState(0);

  const addProduct = (product) => {
    const index = productCartList.findIndex((prod) => prod.id === product.id);
    if (index !== -1) {
      const newList = [...productCartList];
      newList[index].quantity += product.quantity;
      setproductCartList(newList);
    } else {
      setproductCartList([...productCartList, product]);
    }
    setCantidad(cantidad + product.quantity);
  };

  const removeProduct = (idProduct) => {
    const copyArray = [...productCartList];
    const newArray = copyArray.filter((elm) => elm.id !== idProduct);
    setproductCartList(newArray);
  };

  const clearCart = (idProduct) => {
    setproductCartList([]);
    setCantidad(0);
  };

  const getTotalProducts = () => {
    const totalProducts = productCartList.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    return totalProducts;
  };

  const getTotalAmount = () => {
    const totalProducts = productCartList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalProducts;
  };

  const setDrawerOn = (sw) => {
    const on = sw;
    return on;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProduct,
        removeProduct,
        clearCart,
        getTotalProducts,
        getTotalAmount,
        setDrawerOn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
