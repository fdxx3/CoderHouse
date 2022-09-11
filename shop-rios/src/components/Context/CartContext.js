import React, { createContext, useState } from "react";
import getFetch from "../../helper/helper";

const productCartList = [
  {
    id: 1,
    title: "producto1",
    price: 2000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: "ofertas",
  },
  {
    id: 2,
    title: "producto2",
    price: 3000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: "ofertas",
  },
  {
    id: 3,
    title: "producto3",
    price: 4000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: "ofertas",
  },
  {
    id: 4,
    title: "producto4",
    price: 5000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: "destacados",
  },
  {
    id: 5,
    title: "producto6",
    price: 4000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: "destacados",
  },
  {
    id: 6,
    title: "producto7",
    price: 5000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
    initial: 1,
    category: 1,
  },
];

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productCartList, setproductCartList] = useState([]);

  const addProduct = (product) => {
    const index = productCartList.findIndex((prod) => prod.id === product.id);
    if (index !== -1) {
      const newList = [...productCartList];
      newList[index].quantity += product.quantity;
      setproductCartList(newList);
    } else {
      setproductCartList([...productCartList, product]);
    }
  };

  const removeProduct = (idProduct) => {
    const copyArray = [...productCartList];
    const newArray = copyArray.filter((elm) => elm.id !== idProduct);
    setproductCartList(newArray);
  };

  const clearCart = (idProduct) => {
    setproductCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ productCartList, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
