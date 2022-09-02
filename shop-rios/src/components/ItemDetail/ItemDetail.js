import React, { useEffect, useState } from "react";

const ItemDetail = ({ data }) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
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
