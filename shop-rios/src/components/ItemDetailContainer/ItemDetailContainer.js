import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../helper/helper";
import React, { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    getFetch.then((response) => {
      setdata(response.find((prod) => prod.id === 2));
    });
  }, []);

  return (
    <div>
      <ItemDetail data={data} />{" "}
    </div>
  );
};

export default ItemDetailContainer;
