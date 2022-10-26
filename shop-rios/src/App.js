import "./App.css";
import "./components/NavBar/NavBar";
import CartProvider from "./components/Context/CartContext";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { CheckingAuth } from "./ui";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
