import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProductsDataContext } from "./contexts/ProductsContext";
import { Routes } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";
import { CartDataContext } from "./contexts/CartContext";
import { Header } from "./components/Header";

export function App() {
  return (
    <ProductsDataContext>
      <CartDataContext>
        <BrowserRouter>
          <Header />
          <Routes />
          <ToastContainer autoClose={2000} />
        </BrowserRouter>
      </CartDataContext>
    </ProductsDataContext>
  );
}

export default App;
