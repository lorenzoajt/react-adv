import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductcardProps} from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductcardProps): JSX.Element,
  Buttons: ( Props : ProductButtonsProps ) => JSX.Element;
  Image: ( Props: ProductImageProps ) => JSX.Element;
  Title: ( Props: ProductTitleProps ) => JSX.Element,
}