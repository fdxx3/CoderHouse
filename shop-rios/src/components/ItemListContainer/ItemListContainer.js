import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className="greet">{props.greettings}</h1>
      <h2>
        <ItemCount stock={10} initial={1} onAdd="1"></ItemCount>
      </h2>
    </div>
  );
};

export default ItemListContainer;
