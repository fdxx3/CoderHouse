import React, { useEffect, useState } from "react";

export const useForm = (initalForm = {}) => {
  const [formState, setformState] = useState(initalForm);

  //   {
  //     username: "",
  //     email: "",
  //     password: "",
  //   }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setformState(initalForm);
  };

  return { formState, onInputChange, ...formState, onResetForm };
};
