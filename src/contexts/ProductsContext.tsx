import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

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
