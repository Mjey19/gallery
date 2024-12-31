import { useRef } from "react";

const useDebounce = (callback: () => void, delay: number) => {
  const debounceRef = useRef(null);

  return (...args) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
export default useDebounce;
