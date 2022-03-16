import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if (index >= pictures.length) {
      setIndex(() => 0);
    }
    setIndex((index) => index + 1);
  };
  const handlePreviousClick = () => {
    if (index <= 0) {
      setIndex(() => pictures.length);
    }
    setIndex((index) => index - 1);
  };

  return (
    <div className="carousel">
      <div onClick={handlePreviousClick} className="previous">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <img src={pictures[index]} alt="vue de l'interieur" />
      <div className="currentCount">{index}/{pictures.length}</div>
      <div onClick={handleNextClick} className="next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousel;
