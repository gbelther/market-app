import { FormEvent, useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import { api } from "../../services/api";

import "./styles.scss";
import { ProductsContext } from "../../contexts/ProductsContext";

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
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  function handleAddFilter(event: FormEvent<HTMLInputElement>) {
    const filtered = products.filter((product) =>
      product.description
        .toLocaleLowerCase()
        .includes((event.target as HTMLInputElement).value.toLocaleLowerCase())
    );

    setFilteredProducts(filtered);
  }

  return (
    <>
      <Header />

      <div className="container-home">
        <main className="container-main">
          <section className="inputs-wrapper">
            <input
              type="text"
              placeholder="Filtrar produto..."
              onChange={handleAddFilter}
            />
          </section>

          <section className="products-wrapper">
            {filteredProducts ? (
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <h1>Carregando...</h1>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
