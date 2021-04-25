import { useContext, useEffect, useState } from "react";
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
  const { products } = useContext(ProductsContext);

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
            {products ? (
              products.map((product) => (
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
