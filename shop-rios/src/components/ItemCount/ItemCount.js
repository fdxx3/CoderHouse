import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
const ItemCount = ({ stock, initial, AddToCart }) => {
  const [disableSum, setDisableSum] = useState(false);
  const [disableRes, setDisableRes] = useState(false);
  const [contador, setContador] = useState(initial);

  useEffect((stock) => {
    if (stock < 1) {
      setDisableSum(true);
      setDisableRes(true);
      setContador((c) => 1);
    } else {
      setDisableSum(false);
      setDisableRes(false);
    }
  }, []);

  const incrementar = () => {
    if (contador < stock - 1) {
      setContador(contador + 1);
    } else {
      setContador(contador + 1);
      setDisableSum(true);
    }
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      setDisableSum(false);
    }
  };
  return (
    <Box>
      <div>
        <p>Unidades: {contador}</p>
        <Button
          variant="outlined"
          color="primary"
          onClick={decrementar}
          disabled={disableRes}
        >
          -
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={incrementar}
          disabled={disableSum}
        >
          +
        </Button>
      </div>
      <div>
        {/* <button onClick={()=>(agregarProducto(contador))}
     style={{background: contador>1 ? 'blue' : 'white'}}>Agregar al carrito</button> */}
        {contador > 0 ? (
          <Box sx={{ "& button": { m: 1 } }}>
            <Button
              size="Small"
              variant="outlined"
              color="primary"
              onClick={() => {
                AddToCart(contador);
              }}
            >
              Agregar al Carrito
            </Button>
            <NavLink to="/Cart">
              <Button variant="outlined" color="primary" size="Small">
                Terminar mi Compra
              </Button>{" "}
            </NavLink>
          </Box>
        ) : (
          <p> </p>
        )}
      </div>
    </Box>
  );
};

export default ItemCount;
