import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadCrumbs = () => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/catalogo">
          Catalogo
        </Link>
        <Link underline="hover" color="inherit" href="/:ofertas">
          Ofertas
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
