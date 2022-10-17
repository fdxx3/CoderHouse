import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../Layout/AuthLayout";
export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@ejemplo.com"
                fullWidth
              ></TextField>{" "}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="Password"
                placeholder="Contraseña"
                fullWidth
              ></TextField>{" "}
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12} sm={3}>
                {" "}
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                {" "}
                <Button variant="contained" fullWidth>
                  <Google></Google>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={NavLink} color="inherit" to="/Register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
export default LoginPage;
