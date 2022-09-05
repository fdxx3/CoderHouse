import React from "react";

import producto1 from "../assets/producto1.jpg";
import producto2 from "../assets/producto2.jpg";

const ItemData = [
  {
    id: 1,
    title: "producto1",
    price: 2000,
    pictureURL: producto1,
    description: "description1",
    stock: 10,
    initial: 1,
    category: ":ofertas",
  },
  {
    id: 2,
    title: "producto2",
    price: 3000,
    pictureURL: producto2,
    description: "description2",
    stock: 10,
    initial: 1,
    category: ":ofertas",
  },
  {
    id: 3,
    title: "producto3",
    price: 4000,
    pictureURL: producto1,
    description: "description3",
    stock: 10,
    initial: 1,
    category: ":ofertas",
  },
  {
    id: 4,
    title: "producto4",
    price: 5000,
    pictureURL: producto2,
    description: "description4",
    stock: 10,
    initial: 1,
    category: 2,
  },
  {
    id: 5,
    title: "producto6",
    price: 4000,
    pictureURL: producto1,
    description: "description5",
    stock: 10,
    initial: 1,
    category: ":ofertas",
  },
  {
    id: 6,
    title: "producto7",
    price: 5000,
    pictureURL: producto2,
    description: "description6",
    stock: 10,
    initial: 1,
    category: 1,
  },
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ItemData);
  }, 3000);
});

export default getFetch;
