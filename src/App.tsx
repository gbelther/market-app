import { BrowserRouter } from "react-router-dom";
import { ProductsDataContext } from "./contexts/ProductsContext";
import { Routes } from "./routes";

import "./styles/global.scss";

export function App() {
  return (
    <ProductsDataContext>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ProductsDataContext>
  );
}

export default App;
