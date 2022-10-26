import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import { CheckingAuth } from "../ui";
import AuthRoutes from "./AuthRoutes";
import RegisterPage from "../auth/pages/RegisterPage";
import useCheckAuth from "../hooks/useCheckAuth";

const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth></CheckingAuth>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {status === "authenticated" ? (
            <AuthRoutes></AuthRoutes>
          ) : (
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
