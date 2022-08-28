import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ItemCount = ({ stock, initial, agregarProducto }) => {
  const [disableSum, setDisableSum] = useState(false);
  const [disableRes, setDisableRes] = useState(false);
  const [contador, setContador] = useState(initial);

  useEffect(() => {
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
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc", height: "30vh" }}>
        <div>
          <p>Unidades: {contador}</p>
          <button onClick={decrementar} disabled={disableRes}>
            -
          </button>
          <button onClick={incrementar} disabled={disableSum}>
            +
          </button>
        </div>
        {/* <button onClick={()=>(agregarProducto(contador))}
     style={{background: contador>1 ? 'blue' : 'white'}}>Agregar al carrito</button> */}
        {contador > 0 ? <button>Agregar al carrito</button> : <p> </p>}
      </Box>
    </Container>
  );
};

export default ItemCount;
