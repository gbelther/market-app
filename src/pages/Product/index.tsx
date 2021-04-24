import { Header } from "../../components/Header";

import "./styles.scss";

export function Product() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="product-title">
          <p>ACABAXI UNIDADE</p>
        </div>
        <img src="pineapple.png" alt="Pineapple" />
        <section className="product-onsale">
          <p>
            Promoção <img src="sale-tag.png" alt="" />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos
            iste praesentium, repellendus dignissimos cumque placeat qui
          </p>
        </section>
        <section className="product-price">
          <p>R$3,99</p>
          <s>R$4,99</s>
        </section>
        <section className="product-to-cart">
          <button className="product-change-amount-button">-</button>
          <button id="product-to-cart-add-button">
            <p>Adicionar ao Carrinho</p> <p>|</p> <p>3</p>
          </button>
          <button className="product-change-amount-button">+</button>
        </section>
      </main>
    </div>
  );
}
