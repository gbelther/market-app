import { FaShoppingCart } from "react-icons/fa";
import "./styles.scss";

export function Header() {
  return (
    <header className="container-header">
      <div className="logo">
        <img src="Logo.png" alt="Market App" />
        <p>Market App</p>
      </div>
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
