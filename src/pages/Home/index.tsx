import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import { api } from "../../services/api";

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
}

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getProducts() {
      const dataProducts = (await api.get("/")).data;

      setProducts(dataProducts.items);
    }

    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Header />

      <div className="container-home">
        <main className="container-main">
          <section className="inputs-wrapper">
            <input type="text" name="" placeholder="Filtrar produto..." />
          </section>

          <section className="products-wrapper">
            {products.length > 0 &&
              products.map((product) => <Product product={product} />)}
          </section>
        </main>
      </div>
    </>
  );
}
