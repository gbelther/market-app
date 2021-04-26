import { FormEvent, useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { FiTrash2 } from "react-icons/fi";

import "./styles.scss";

interface IProduct {
  id: number;
  order_number: number;
  price: number;
  image: string;
  description: string;
  stock: number;
  offer?: number;
  promotion?: {
    kind: string;
    base: number;
    value: number;
  };
  amount: number;
}

export function Cart() {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { deliveryTax } = useContext(ProductsContext);
  const { cart, decrementProduct, addProduct, deleteProduct } = useCart();

  useEffect(() => {
    setFilteredProducts(cart);
  }, [cart]);

  function handleAmountToCartChange(product: IProduct, type: string) {
    if (type === "-") {
      decrementProduct(product);
    }

    if (type === "+") {
      addProduct(product);
    }
  }

  function finalPriceOfProduct(product: IProduct) {
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

  function handleDeleteProductFromCart(product: IProduct) {
    deleteProduct(product);
  }

  return (
    <>
      <Header />

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
                <p>{product.description}</p>
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
                <div className="product-delete">
                  <FiTrash2
                    size={20}
                    onClick={() => handleDeleteProductFromCart(product)}
                  />
                </div>
              </div>
              <div className="product-final-value">
                <p>{formatPrice(finalPriceOfProduct(product))}</p>
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
            <button>Finalizar Compra</button>
          </div>
        </section>
      </main>
    </>
  );
}
