import { useContext } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { ProductsContext } from "../../contexts/ProductsContext";
import { formatPrice } from "../../util/format";

import "./styles.scss";

interface IUseParamsProps {
  id: string;
}

export function AboutProduct() {
  const { products } = useContext(ProductsContext);

  const { id } = useParams<IUseParamsProps>();

  const product = products.find((product) => product.id === Number(id));

  console.log(products);
  console.log(id);
  console.log(product);

  return (
    <>
      <Header />

      {product ? (
        <main className="container">
          <div className="product-title">
            <p>{product.description}</p>
          </div>
          <img src={product.image} alt="Pineapple" />
          <section className="product-onsale">
            {product.promotion && (
              <>
                <p>
                  Promoção <img src="/sale-tag.png" alt="" />
                </p>
                <p>
                  Na compra de {product.promotion.base} produtos você leva{" "}
                  {product.promotion.value}
                </p>
              </>
            )}
          </section>
          <section className="product-price">
            {product.offer ? (
              <>
                <p>{formatPrice(product.offer)}</p>
                <s>{formatPrice(product.price)}</s>
              </>
            ) : (
              <p>{formatPrice(product.price)}</p>
            )}
          </section>
          <section className="product-to-cart">
            <button className="product-change-amount-button">-</button>
            <button id="product-to-cart-add-button">
              <p>Adicionar ao Carrinho</p> <p>|</p> <p>3</p>
            </button>
            <button className="product-change-amount-button">+</button>
          </section>
        </main>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
