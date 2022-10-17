import { createSlice } from "@reduxjs/toolkit";
export const authtSlice = createSlice({
  name: "name",
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
    checkinCredentials: (state, action) => {},
  },
});

export const { login, logout, checkinCredentials } = authtSlice.actions;
