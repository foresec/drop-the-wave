import { useEffect, useState } from "react";

const useDebounce = (val: string, delay: number) => {
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(val.trim());
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);

  return debouncedVal;
};

export default useDebounce
