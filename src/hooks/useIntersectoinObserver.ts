import { RefObject, useEffect } from "react";

interface IntersectionObserverType {
  target: RefObject<Element> | null;
  threshold?: number;
  onObserverCallback: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  target,
  threshold = 0,
  onObserverCallback,
}: IntersectionObserverType) => {
  useEffect(() => {
    const currentRef = target?.current;
    if (!currentRef) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onObserverCallback,
      {
        threshold: threshold,
      }
    );
    observer.observe(currentRef);

    return () => observer && observer.unobserve(currentRef);
  }, [onObserverCallback, target, threshold]);
};

export default useIntersectionObserver;
