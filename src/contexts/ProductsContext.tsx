import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

import { IProduct } from "../types";

interface IProductsDataContextProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProduct[];
  deliveryTax: number;
}

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

export const ProductsDataContext = ({
  children,
}: IProductsDataContextProps): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [deliveryTax, setDeliveryTax] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      const data = (await api.get("/")).data;

      if (data) {
        setProducts(data.items);
        setDeliveryTax(data.delivery_tax);
      }
    }

    getData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, deliveryTax }}>
      {children}
    </ProductsContext.Provider>
  );
};
