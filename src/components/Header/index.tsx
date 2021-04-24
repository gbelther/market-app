import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.scss";

export function Header() {
  return (
    <header className="container-header">
      <Link to="/">
        <div className="logo">
          <img src="/Logo.png" alt="Market App" />
          <p>Market App</p>
        </div>
      </Link>
      <div className="cart">
        <a>
          <FaShoppingCart size={30} />
          <p>Carrinho</p>
        </a>
        <p id="items-amount">10</p>
      </div>
    </header>
  );
}
