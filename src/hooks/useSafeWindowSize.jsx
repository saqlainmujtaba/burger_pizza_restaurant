import { useState, useEffect } from "react";

export const useSafeWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
