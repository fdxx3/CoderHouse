import React, { useEffect, useState } from "react";
import getFetch from "../../helper/helper";

const ItemDetail = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getFetch.then((response) => {
      setdata(response.find((prod) => prod.id === 2));
      setloading(false);
    });
  }, []);

  return (
    <div className="item-container">
      <h1>Item Detail Container</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="item-detail">
          <img src={data.pictureURL}></img>
          <div>{data.title} </div>
          <div>{data.price} </div>
          <div>{data.description} </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
