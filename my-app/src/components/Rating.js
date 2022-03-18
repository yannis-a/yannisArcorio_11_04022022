import React from "react";

const Rating = ({ rating }) => {
  const getIcon = (index) => {
    if (rating >= index) {
      return "fa-solid fa-star fill";
    }
    return "fa-solid fa-star";
  };

  return (
    <div className="rating">
      {[...new Array(5)]
        .map((_, i) => i + 1)
        .map((index) => (
          <i key={index} className={getIcon(index)}></i>
        ))}
    </div>
  );
};

export default Rating;
