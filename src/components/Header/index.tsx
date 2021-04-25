import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./styles.scss";

export function Header() {
  const { cart } = useCart();

  return (
    <header className="container-header">
      <Link to="/">
        <div className="logo">
          <img src="/Logo.png" alt="Market App" />
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
