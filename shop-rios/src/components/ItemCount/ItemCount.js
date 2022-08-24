import { useState, useEffect } from "react";
const ItemCount = ({ stock, initial, agregarProducto }) => {
  const [CantidadItems, setCantidadItems] = useState(initial);
  const [disableSum, setDisableSum] = useState(false);
  const [disableRes, setDisableRes] = useState(false);
  const [contador, setContador] = useState(initial);

  // useEffect(() => {
  //   if (stock < 1) {
  //     setDisableSum(true);
  //     setDisableRes(true);
  //     setContador(contador == 1);
  //   } else {
  //     setDisableSum(false);
  //     setDisableRes(false);
  //   }
  // }, []);

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
    <div>
      <p>Numero de clics {contador}</p>

      <button onClick={decrementar} disabled={disableRes}>
        -
      </button>
      <button onClick={incrementar} disabled={disableSum}>
        +
      </button>
      {/* <button onClick={()=>(agregarProducto(contador))}
     style={{background: contador>1 ? 'blue' : 'white'}}>Agregar al carrito</button> */}

      {contador > 1 ? (
        <p>ya puede agregar productos</p>
      ) : (
        <p>Incremente los productos!</p>
      )}
    </div>
  );
};

export default ItemCount;
