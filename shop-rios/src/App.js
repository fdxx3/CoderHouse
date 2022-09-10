import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaContacto from "./components/PaginaContacto/PaginaContacto";
import PaginaNosotros from "./components/PaginaNosotros/PaginaNosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ThemeContext from "./components/Context/ThemeContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <ThemeContext.Provider value={{ texto: "texto inical" }}>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/catalogo" element={<ItemListContainer />} />
              {/* <Route path="/productos/camisas" element={<ItemListContainer />}/>
        <Route path="/productos/zapatos" element={<ItemListContainer />}/> */}
              <Route
                path="/catalogo/:tipoProducto"
                element={<ItemListContainer />}
              />
              {/* /item/:id */}
              <Route path="/contacto" element={<PaginaContacto />} />
              <Route path="/nosotros" element={<PaginaNosotros />} />
              <Route path="*" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
            {/* <ItemListContainer />
      <ItemDetailContainer/> */}
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
