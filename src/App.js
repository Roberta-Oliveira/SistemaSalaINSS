import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Rotas from "./Rotas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </>
  );
}

export default App;
