import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { NavLink, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    maxHeight: 500,
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Item = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const itemdetail = "/item/".concat(data.id);
  const [loading, setloading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            <CardActionArea onClick={handleOpen}>
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

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderColor: "primary.main", borderBottom: 1, p: 1 }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={data.pictureURL}
                  alt=""
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ p: 1 }}
              >
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
              </Box>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default Item;
