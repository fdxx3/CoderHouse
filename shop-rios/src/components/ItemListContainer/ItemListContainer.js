import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const { tipoProducto } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        let queryRef = !tipoProducto
          ? collection(db, "ItemData")
          : query(
              collection(db, "ItemData"),
              where("category", "==", tipoProducto)
            );
        const response = await getDocs(queryRef);

        const datos = response.docs.map((doc) => {
          const newDoc = {
            ...doc.data(),
            id: doc.id,
          };

          return newDoc;
        });

        setData(datos);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [tipoProducto]);

  return (
    <Box>
      {loading ? (
        <h2>Cargando ...</h2>
      ) : (
        <Box>
          <ItemList data={data} category={tipoProducto} />
        </Box>
      )}
    </Box>
  );
};

export default ItemListContainer;
