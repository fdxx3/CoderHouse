import { useDispatch, useSelector } from "react-redux";
import { Google } from "@mui/icons-material";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthLayout from "../../Layout/AuthLayout";
import {
  checkingAutentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunk";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAutenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSingIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@ejemplo.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              ></TextField>{" "}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="Password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              ></TextField>{" "}
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12} sm={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error"> {errorMessage} </Alert>
              </Grid>
              <Grid item xs={12} sm={3}>
                {" "}
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isAutenticating}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                {" "}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSingIn}
                  disabled={isAutenticating}
                >
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
