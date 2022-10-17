import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

const LoginForm = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //   const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario de login</h1> <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>
      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>
      <button onClick={onResetForm}>Borrar</button>
    </>
  );
};

export default LoginForm;
