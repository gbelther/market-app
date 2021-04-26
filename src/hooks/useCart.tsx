import { useState } from "react";

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

interface ICart {
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

export function useCart() {
  const [cart, setCart] = useState<ICart[]>(() => {
    const cartStorage = localStorage.getItem("MarketApp:cart");

    if (cartStorage) return JSON.parse(cartStorage);

    return [];
  });

  function productAmount(product: IProduct | ICart) {
    const productInCart = cart.find((prod) => prod.id === product.id);

    return productInCart ? Number(productInCart.amount) : 0;
  }

  function addProduct(product: IProduct) {
    const productInCart = cart.find((prod) => prod.id === product.id);

    if (!productInCart) {
      if (product.stock > 0) {
        setCart([...cart, { ...product, amount: 1 }]);
        localStorage.setItem(
          "MarketApp:cart",
          JSON.stringify([...cart, { ...product, amount: 1 }])
        );

        return;
      }
    }

    if (productInCart && product.stock > productInCart.amount) {
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, amount: Number(p.amount) + 1 } : p
      );

      setCart(updatedCart);
      console.log(updatedCart);

      localStorage.setItem("MarketApp:cart", JSON.stringify(updatedCart));
      return;
    } else {
      alert("Produto sem estoque!");
    }
  }

  function decrementProduct(product: IProduct | ICart) {
    const productInCart = cart.find((prod) => prod.id === product.id);

    if (productInCart) {
      if (productInCart.amount > 1) {
        const updatedCart = cart.map((p) =>
          p.id === product.id ? { ...p, amount: Number(p.amount) - 1 } : p
        );

        setCart(updatedCart);
        console.log(updatedCart);

        localStorage.setItem("MarketApp:cart", JSON.stringify(updatedCart));
        return;
      } else {
        deleteProduct(product);
      }
    }
  }

  function deleteProduct(product: IProduct | ICart) {
    const productInCart = cart.find((prod) => prod.id === product.id);

    if (productInCart) {
      const updatedCart = cart.filter((p) => p.id !== productInCart.id);

      setCart(updatedCart);

      localStorage.setItem("MarketApp:cart", JSON.stringify(updatedCart));
      return;
    }
  }

  return { cart, productAmount, addProduct, decrementProduct, deleteProduct };
}
