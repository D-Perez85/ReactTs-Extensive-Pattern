import { createContext, CSSProperties, ReactElement } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  return (
    <Provider value={{ product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
export default ProductCard;
