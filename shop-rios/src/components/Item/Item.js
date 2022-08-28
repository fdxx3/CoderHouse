import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
const Item = ({ ItemData }) => {
  useEffect(() => {
    const funcionAsincrona = async () => {
      try {
        console.log("ItemData", ItemData);
      } catch (error) {
        console.log("hubo un error");
      }
    };
    funcionAsincrona();
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ItemData.pictureURL}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {ItemData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {ItemData.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={5} initial={1} onAdd="1"></ItemCount>
    </Card>
  );
};

export default Item;
