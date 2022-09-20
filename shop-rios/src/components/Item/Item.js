import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    maxHeight: 500,
  },
}));

const Item = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const itemdetail = "/item/".concat(data.id);
  const [loading, setloading] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <Box>
      {loading ? (
        <h2>Cargando ...</h2>
      ) : (
        <Box>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={data.pictureURL}
                alt=""
              />
            </CardActionArea>
            <CardContent>
              <h4>{data.title} </h4>
              <h6>Precio: ${data.price} </h6>
            </CardContent>

            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to={itemdetail}
            >
              <Button variant="outlined" color="primary">
                Detalles
              </Button>
            </NavLink>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Item;
