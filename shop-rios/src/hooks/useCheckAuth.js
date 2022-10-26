import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { logout, login } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  return { status };
};

export default useCheckAuth;
