import { useEffect, useState, FC } from "react";

import { ICounter } from "../../models";
import { counterAnimation } from "../../animations";

const Counter: FC<ICounter> = ({ number, className}) => {
  // Init counter
  const [counter, setCounter] = useState({ value: 0 });

  // Init object for GSAP for manipulation with counter
  const target = {
    value: counter.value,
  };

  useEffect(() => {
    counterAnimation(target, number, setCounter)
  }, [number]);

  return <span className={className}>{counter.value}</span>;
};

export default Counter;
