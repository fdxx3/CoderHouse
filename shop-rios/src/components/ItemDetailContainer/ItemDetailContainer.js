import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  // useEffect(() => {
  //   getFetch.then((response) => {
  //     setdata(response.find((prod) => prod.id === parseInt(id)));
  //   });
  // }, [id]);

  useEffect(() => {
    const queryRef = doc(db, "ItemData", id);
    getDoc(queryRef)
      .then((response) => {
        const newDoc = {
          ...response.data(),
          id: response.id,
        };
        console.log(newDoc);
        setdata(newDoc);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemDetail data={data} />{" "}
    </div>
  );
};

export default ItemDetailContainer;
