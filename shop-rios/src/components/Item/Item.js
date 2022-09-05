import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    maxHeight: 500,
  },
  media: {
    paddingTop: "10",
    height: "100", // 16:9
  },
}));

const Item = ({ data }) => {
  const [products, setproducts] = React.useState();
  const [expanded, setExpanded] = React.useState(false);
  const itemdetail = "/item/".concat(data.id);
  const AddToCart = (selectedNumber) => {
    setproducts(selectedNumber);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image={data.pictureURL}
          alt=""
        />
      </CardActionArea>
      <CardContent>
        <h4>{data.title} </h4>
        <h6>Precio: ${data.price} </h6>

        <ItemCount
          stock={data.stock}
          initial={data.initial}
          AddToCart={AddToCart}
        />
      </CardContent>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <NavLink
        className={({ isActive }) =>
          isActive ? "claseActive" : "claseInactive"
        }
        to={itemdetail}
      >
        <Button variant="outlined" color="secondary">
          Detalles
        </Button>
      </NavLink>
    </Card>
  );
};

export default Item;
