import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number
}


export const useProduct = ( {onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);


  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    
    
    // execute only if onChange has a value
    onChange && onChange({ count: newValue, product})
  };

  useEffect(() => {
    setCounter(value)
  }, [value])
  
  return{
      increaseBy,
      counter
  }
  
};
