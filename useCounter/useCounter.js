import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = ( ) => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  const decrement = (value =1) => {
    //if (counter === 0) return;
    setCounter(counter - value);
  };
  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
