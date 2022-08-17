import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(50),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <Typography variant="h6" className={classes.title}>
            Shop-Rios
          </Typography>
        </IconButton>
        <div>
          <Button color="inherit" onClick={handleOpen}>
            Catalogo
          </Button>
          <Button color="inherit" onClick={handleOpen}>
            Ofertas
          </Button>
          <Button color="inherit" onClick={handleOpen}>
            ¿Quienes Somos?
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
