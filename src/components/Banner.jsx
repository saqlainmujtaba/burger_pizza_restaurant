import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../styles/components/banner.css";
import { useEffect, useRef, useState } from "react";

export default function Banner({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // Swiped left → go to next
      next();
    } else if (distance < -50) {
      // Swiped right → go to prev
      prev();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prev = () => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
  };
  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(next, autoSlideInterval);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => {
    if (!autoSlide) return;
    startAutoSlide();
    return () => stopAutoSlide(); // clean up
  }, [autoSlide]);

  return (
    <div
      className="banner"
      onMouseEnter={() => {
        if (autoSlide) stopAutoSlide();
      }}
      onMouseLeave={() => autoSlide && startAutoSlide()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="crausal"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="btns">
        <button onClick={prev}>
          <FaAngleLeft className="left" color="red" />
        </button>
 
        <button onClick={next}>
          <FaAngleRight className="right" color="red" />
        </button>
      </div>
      <div className="indicators">
        <div className="indicator">
          {children.map((_, i) => (
            <div
              className={`indicate ${curr === i && "active"}`}
              onClick={() => setCurr(i)}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
