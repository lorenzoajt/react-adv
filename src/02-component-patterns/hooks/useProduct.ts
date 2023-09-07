import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number
}


export const useProduct = ( {onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  //create a flag to check if is onChanged is passed as prop
  // !onChange => if onChange doesn't exist = false
  // !!onChange => negate the previous result: if onChange doesnt exists return true
  const isControlled = useRef ( !!onChange )

  const increaseBy = (value: number) => {

    if(isControlled.current){
      // ! at the end tells typescript to trust the developer
      return onChange!({count: value, product})
    }

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
