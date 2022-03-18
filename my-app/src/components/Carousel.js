import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    setIndex((index) => index + 1);
    if (index === pictures.length - 1) {
      setIndex(0);
    }
  };
  const handlePreviousClick = () => {
    if (index <= 0) {
      setIndex(() => pictures.length);
    }
    setIndex((index) => index - 1);
  };

  return (
    <div className="carousel">
      <div className="images">
        <img src={pictures[index]} alt="vue de l'interieur" />
      </div>
      <div className="actions">
        <div onClick={handlePreviousClick} className="previous">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="currentCount">
          {index + 1}/{pictures.length}
        </div>
        <div onClick={handleNextClick} className="next">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
