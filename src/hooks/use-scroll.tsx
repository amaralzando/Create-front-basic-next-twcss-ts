import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold: number){
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = useCallback(() => {
    setIsScrolling(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return isScrolling;
}
