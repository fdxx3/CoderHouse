import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemList = ({ data }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <Box>
      <h1>Item List Container</h1>

      {loading ? (
        <h2>Cargando ...</h2>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          {data.map((data) => (
            <Grid key={data.id} item>
              <Item key={data.id} data={data} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ItemList;
