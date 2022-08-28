import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import producto1 from "../../assets/producto1.jpg";
import producto2 from "../../assets/producto2.jpg";

import Grid from "@material-ui/core/Grid";
const ItemData = [
  {
    id: 1,
    title: "producto1",
    price: 2000,
    pictureURL: producto1,
  },
  {
    id: 2,
    title: "producto2",
    price: 3000,
    pictureURL: producto2,
  },
];

const ItemList = () => {
  const [ProductosData, setProductosData] = useState([]);

  const ObtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ItemData);
      }, 3000);
    });
  };

  useEffect(() => {
    const funcionAsincrona = async () => {
      try {
        const listado = await ObtenerProductos();
        setProductosData(listado);
        console.log("listado", listado);
      } catch (error) {
        console.log("hubo un error");
      }
    };
    funcionAsincrona();
  }, []);

  return (
    <div>
      {ProductosData.map((data) => {
        return <Item ItemData={data} key={data.id} />;
      })}
    </div>
  );
};

export default ItemList;
