import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./styles.scss";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="container-header">
      <Link to="/">
        <div className="logo">
          <img src="/logo.png" alt="Market App" />
          <p>Market App</p>
        </div>
      </Link>
      <div className="cart">
        <Link to="/cart">
          <FaShoppingCart size={30} />
          <p>Carrinho</p>
        </Link>
        <p id="items-amount">{cart.length}</p>
      </div>
    </header>
  );
}
