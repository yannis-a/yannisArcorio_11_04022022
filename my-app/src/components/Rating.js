import React from "react";

const Rating = ({ rating }) => {
  const getIcon = (index) => {
    if (rating >= index) {
      return "fa-solid fa-star";
    }
    return "fa-regular fa-star";
  };

  return (
    <div className="rating">
      {Array(5)
        .fill(0)
        .map((_, i) => i + 1)
        .map((index) => (
          <i key={index} className={getIcon(index)}></i>
        ))}
    </div>
  );
};

export default Rating;
