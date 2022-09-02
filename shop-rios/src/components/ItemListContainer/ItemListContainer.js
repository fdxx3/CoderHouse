import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getFetch.then((data) => {
      setData(data);
      setloading(false);
      console.log(data);
    });
  }, []);

  return (
    <Box>
      <ItemList data={data} />;
    </Box>
  );
};

export default ItemListContainer;
