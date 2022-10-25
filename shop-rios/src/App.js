import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaContacto from "./components/PaginaContacto/PaginaContacto";
import PaginaNosotros from "./components/PaginaNosotros/PaginaNosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./components/Context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderForm from "./components/OrderForm/OrderForm";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
function App() {
  return (
    <Provider store={store}>
      <CartProvider>
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
                <Route path="/CartContainer" element={<CartContainer />} />
                <Route path="/OrderForm" element={<OrderForm />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/Register" element={<RegisterPage />} />
              </Routes>

              {/* <ItemListContainer />
      <ItemDetailContainer/> */}
            </div>
          </div>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
