import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Grow from "@mui/material/Grow";
import { StyledEngineProvider } from "@mui/material/styles";
const ItemList = ({ data, category }) => {
  const [loading, setloading] = useState(true);

  const [checked, setChecked] = React.useState(true);
  var title = "Catalogo";

  if (category == "destacados") title = "Destacados";
  if (category == "ofertas") title = "Ofertas";

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <Box>
      <h1>{title}</h1>

      {loading ? (
        <h2> </h2>
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
            <Grow
              key={data.id}
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
            >
              <Grid key={data.id} item>
                <Item key={data.id} data={data} />{" "}
              </Grid>
            </Grow>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ItemList;
