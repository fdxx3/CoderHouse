import "./ItemListContainer.css";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  useEffect(() => {
    const getData = async () => {
      const peticion = await fetch(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const response = await peticion.json();
      console.log(response);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="App2">{props.greettings} </div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
