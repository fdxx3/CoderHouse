import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../helper/helper";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    getFetch.then((response) => {
      setdata(response.find((prod) => prod.id === parseInt(id)));
    });
  }, [id]);

  return (
    <div>
      <ItemDetail data={data} />{" "}
    </div>
  );
};

export default ItemDetailContainer;
