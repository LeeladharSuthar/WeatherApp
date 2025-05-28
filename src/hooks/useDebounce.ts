import { useEffect } from "react";

function useDebounceEffect(
  effect: () => void,
  deps: any[],
  delay: number
): void {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...deps, delay]);
}

export default useDebounceEffect;
