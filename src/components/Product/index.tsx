import { Link } from "react-router-dom";
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
}

interface IProductProps {
  product: IProduct;
}

export function Product({ product }: IProductProps) {
  return (
    <div className="product">
      {product.promotion && (
        <img src="sale-tag.png" alt="Offer" className="offer-tag" />
      )}

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="pineapple" />
      </Link>
      <div className="product-info">
        <p>{product.description}</p>
        <div className="product-price">
          {product.offer ? (
            <>
              <p>{formatPrice(product.offer)}</p>
              <s>{formatPrice(product.price)}</s>
            </>
          ) : (
            <p>{formatPrice(product.price)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
