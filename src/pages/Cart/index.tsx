import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
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
  const { cart, decrementProduct, addProduct } = useCart();

  function handleAmountToCartChange(product: IProduct, type: string) {
    if (type === "-") {
      decrementProduct(product);
    }

    if (type === "+") {
      addProduct(product);
    }
  }

  return (
    <>
      <Header />

      <main className="container-cart">
        <section className="prodcuts-filter">
          <p>Carrinho</p>
          <input type="text" placeholder="Filtrar produto..." />
        </section>

        {cart &&
          cart.map((product) => (
            <section className="product-in-cart">
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
              </div>
              <div className="product-final-value">
                <p>{formatPrice(product.price)}</p>
              </div>
            </section>
          ))}

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
