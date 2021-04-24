import { Header } from "../../components/Header";
import "./styles.scss";

export function Cart() {
  return (
    <>
      <Header />

      <main className="container-cart">
        <section className="prodcuts-filter">
          <p>Carrinho</p>
          <input type="text" placeholder="Filtrar produto..." />
        </section>

        <section className="product-in-cart">
          <img src="pineapple.png" alt="Pineapple" />
          <div className="product-info">
            <p>ABACAXI UNITÁRIO</p>
            <div className="product-change-amount">
              <button type="button">-</button>
              <p>3</p>
              <button type="button">+</button>
            </div>
          </div>
          <div className="product-final-value">
            <p>R$3,99</p>
          </div>
        </section>

        <section className="product-in-cart">
          <img src="pineapple.png" alt="Pineapple" />
          <div className="product-info">
            <p>ABACAXI UNITÁRIO</p>
            <div className="product-change-amount">
              <button type="button">-</button>
              <p>3</p>
              <button type="button">+</button>
            </div>
          </div>
          <div className="product-final-value">
            <p>R$3,99</p>
          </div>
        </section>

        <section className="products-value">
          <div className="freight">
            <p>Frete:</p>
            <p>R$9,99</p>
          </div>
          <div className="products-balance">
            <p>Total: </p>
            <p>R$118,94</p>
          </div>
          <div className="products-buy">
            <button>Finalizar Compra</button>
          </div>
        </section>
      </main>
    </>
  );
}
