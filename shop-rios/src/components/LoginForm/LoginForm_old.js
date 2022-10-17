import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [formState, setformState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

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
    </>
  );
};

export default LoginForm;
