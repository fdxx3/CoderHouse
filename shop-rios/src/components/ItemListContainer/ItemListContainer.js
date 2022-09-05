import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const { tipoProducto } = useParams();

  useEffect(() => {
    getFetch.then((data) => {
      if (!tipoProducto) {
        setData(data);
      } else {
        const nuevaLista = data.filter(
          (item) => item.category === tipoProducto
        );
        setData(nuevaLista);
      }

      setloading(false);
    });
  }, [tipoProducto]);

  return (
    <Box>
      <ItemList data={data} />;
    </Box>
  );
};

export default ItemListContainer;
