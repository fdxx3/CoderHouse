import "./App.css";
import "./components/NavBar/NavBar";
import ResponsiveAppBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ItemListContainer greettings="Bienvenidos!" />
    </div>
  );
}

export default App;
