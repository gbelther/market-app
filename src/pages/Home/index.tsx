import { Header } from "../../components/Header";

import "./styles.scss";

export function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <main className="container-main">
          <section className="inputs-wrapper">
            <input type="text" name="" placeholder="Filtrar produto..." />
          </section>

          <section className="products-wrapper">
            <div className="product">
              <img src="sale-tag.png" alt="Offer" id="offer-tag" />
              <img src="pineapple.png" alt="pineapple" />
              <div className="product-info">
                <p>ABACAXI UNIDADE</p>
                <div className="product-price">
                  <p>R$3,99</p>
                  <s>R$4,99</s>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="sale-tag.png" alt="Offer" id="offer-tag" />
              <img src="pineapple.png" alt="pineapple" />
              <div className="product-info">
                <p>ABACAXI UNIDADE</p>
                <div className="product-price">
                  <p>R$3,99</p>
                  <s>R$4,99</s>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="sale-tag.png" alt="Offer" id="offer-tag" />
              <img src="pineapple.png" alt="pineapple" />
              <div className="product-info">
                <p>ABACAXI UNIDADE</p>
                <div className="product-price">
                  <p>R$3,99</p>
                  <s>R$4,99</s>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
