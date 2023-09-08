import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}


export const useProduct = ( {onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {

    let newValue = Math.max(counter + value, 0)
    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount )
    }
    // const newValue = Math.min(counter + value, initialValues?.maxCount || 10)
    
    setCounter(newValue)
    
    
    // execute only if onChange has a value
    onChange && onChange({ count: newValue, product})
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if( !isMounted.current ) return;
    else isMounted.current = true

    setCounter( value )    
  }, [ value ])

  // useEffect(() => {
  //   console.log({isMounted})
  //   isMounted.current = true
  // }, [])
  
  
  return{
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, 
    
    increaseBy,
    reset
  }
  
};
