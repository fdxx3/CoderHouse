import { configureStore } from "@reduxjs/toolkit";
import { authtSlice } from "../auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authtSlice.reducer,
  },
});
