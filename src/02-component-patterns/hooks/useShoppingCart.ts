import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      // if the product given the id exists, assign it to product in card
      const productInCard: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      // if element has at least one unit
      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };
      }

      // Delete product
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // Easy implementation
      // if(count === 0 ) {
      //   //deleting with destructuring
      //   const { [product.id]: toDelete, ...rest  } = oldShoppingCart
      //   return rest
      //   // return { ...rest }
      // }

      // return {
      //   ...oldShoppingCart,
      //   [ product.id ]: {... product, count}
      // }
    });
  };
  return{
    shoppingCart,
    onProductCountChange
  }
};
