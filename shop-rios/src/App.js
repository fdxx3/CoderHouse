import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greettings="Bienvenidos!" />
      <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
