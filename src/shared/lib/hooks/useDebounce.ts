import { MutableRefObject, useRef } from "react";

export function useDebounce(callback: any, delay: number) {
  const timer = useRef(null) as MutableRefObject<any>;

  return function () {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
    }, delay);
  };
}
