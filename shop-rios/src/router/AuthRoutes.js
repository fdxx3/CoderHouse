import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import PaginaContacto from "../components/PaginaContacto/PaginaContacto";
import PaginaNosotros from "../components/PaginaNosotros/PaginaNosotros";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../components/CartContainer/CartContainer";
import OrderForm from "../components/OrderForm/OrderForm";

import { Routes, Route } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route path="/catalogo/:tipoProducto" element={<ItemListContainer />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/nosotros" element={<PaginaNosotros />} />
        <Route path="*" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/CartContainer" element={<CartContainer />} />
        <Route path="/OrderForm" element={<OrderForm />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
