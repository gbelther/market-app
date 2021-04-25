import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";

import "./styles.scss";

export function AboutProduct(): JSX.Element {
  const { products } = useContext(ProductsContext);
  const { productAmount, addProduct, decrementProduct } = useCart();

  const { id } = useParams<{ id: string }>();

  const product = products.find((product) => product.id === Number(id));

  function handleAmountToCartChange(type: string) {
    if (product) {
      if (type === "-") {
        decrementProduct(product);
      }

      if (type === "+") {
        addProduct(product);
      }
    }
  }

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
            <button
              className="product-change-amount-button"
              type="button"
              value="-"
              onClick={() => handleAmountToCartChange("-")}
            >
              -
            </button>
            <div
              className={
                productAmount(product) > 0
                  ? "product-amount-positive"
                  : "product-amount-zero"
              }
            >
              <p>Quantidade no carrinho</p> <p>|</p>{" "}
              <p>{productAmount(product)}</p>
            </div>
            <button
              className="product-change-amount-button"
              type="button"
              value="+"
              onClick={() => handleAmountToCartChange("+")}
            >
              +
            </button>
          </section>
        </main>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
