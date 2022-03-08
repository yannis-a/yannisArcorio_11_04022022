import React, { useRef } from "react";

const Carousel = ({ pictures }) => {
  const previous = useRef();
  const next = useRef();

  return (
    <div className="carousel">
      <div ref={previous} className="previous"><i class="fa-regular fa-chevron-left"></i></div>
      <div ref={next} className="next"><i class="fa-regular fa-chevron-right"></i></div>
    </div>
  );
};

export default Carousel;
