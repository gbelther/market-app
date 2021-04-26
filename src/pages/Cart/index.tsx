import { FormEvent, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { formatPrice } from "../../util/format";
import { FiTrash2 } from "react-icons/fi";

import { IProductInCart } from "../../types";

import "./styles.scss";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const [filteredProducts, setFilteredProducts] = useState<IProductInCart[]>(
    []
  );
  const { deliveryTax } = useContext(ProductsContext);
  const { cart, addProduct, decrementProduct, deleteProduct } = useContext(
    CartContext
  );

  useEffect(() => {
    setFilteredProducts(cart);
  }, [cart]);

  function handleAmountToCartChange(product: IProductInCart, type: string) {
    if (type === "-") {
      decrementProduct(product);
    }

    if (type === "+") {
      addProduct(product);
    }
  }

  function finalPriceOfProduct(product: IProductInCart) {
    if (product.promotion) {
      const price = product.offer
        ? (product.amount -
            Math.trunc(product.amount / product.promotion.value)) *
          product.offer
        : (product.amount -
            Math.trunc(product.amount / product.promotion.value)) *
          product.price;

      return price;
    }

    if (product.offer) return product.amount * product.offer;

    return product.amount * product.price;
  }

  function finalPriceOfAll() {
    let finalPrice = cart.reduce((previous, curr) => {
      return previous + finalPriceOfProduct(curr);
    }, 0);

    filteredProducts.length > 0 && (finalPrice += deliveryTax);

    return finalPrice;
  }

  function handleAddFilterProducts(event: FormEvent<HTMLInputElement>) {
    const filtered = cart.filter((product) =>
      product.description
        .toLocaleLowerCase()
        .includes((event.target as HTMLInputElement).value.toLocaleLowerCase())
    );

    setFilteredProducts(filtered);
  }

  function handleDeleteProductFromCart(product: IProductInCart) {
    deleteProduct(product);
  }

  return (
    <>
      <main className="container-cart">
        <section className="prodcuts-filter">
          <p>Carrinho</p>
          <input
            type="text"
            placeholder="Filtrar produto..."
            onChange={handleAddFilterProducts}
          />
        </section>

        {filteredProducts &&
          filteredProducts.map((product) => (
            <section key={product.id} className="product-in-cart">
              <img src={product.image} alt="Pineapple" />
              <div className="product-info">
                <div className="product-info-wrap">
                  <div className="product-change-amount">
                    <button
                      type="button"
                      value="-"
                      onClick={() => handleAmountToCartChange(product, "-")}
                    >
                      -
                    </button>
                    <p>{product.amount}</p>
                    <button
                      type="button"
                      value="+"
                      onClick={() => handleAmountToCartChange(product, "+")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p>{product.description}</p>
              </div>
              <div className="product-delete">
                <FiTrash2
                  size={20}
                  onClick={() => handleDeleteProductFromCart(product)}
                />
              </div>
              <div className="product-final-value">
                <p>{formatPrice(finalPriceOfProduct(product))}</p>
                {product.promotion &&
                  (product.amount + 1) % product.promotion.value === 0 && (
                    <span>
                      Adicione mais uma unidade e pague esse mesmo valor
                    </span>
                  )}
              </div>
            </section>
          ))}

        <section className="products-value">
          <div className="freight">
            <p>Frete:</p>
            <p>{filteredProducts.length > 0 && formatPrice(deliveryTax)}</p>
          </div>
          <div className="products-balance">
            <p>Total: </p>
            <p>{formatPrice(finalPriceOfAll())}</p>
          </div>
          <div className="products-buy">
            <button>Finalizar</button>
          </div>
        </section>
      </main>
    </>
  );
}
