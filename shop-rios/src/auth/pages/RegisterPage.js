import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../Layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Registrarse">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="name"
                placeholder="Tu Nombre"
                fullWidth
              ></TextField>{" "}
            </Grid>
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
              <Grid item xs={12} sm={4}>
                {" "}
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Ya tienes una cuenta? </Typography>
              <Link component={NavLink} color="inherit" to="/Login">
                <Typography sx={{ mr: 1, fontWeight: "bold" }}>
                  Ingresar{" "}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
export default RegisterPage;
