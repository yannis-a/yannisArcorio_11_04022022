import React, { useRef } from "react";

const Rating = (props) => {
  const { rate } = props;
  const ratingDiv = useRef();

  const init = () =>{
      
  }
  return (
    <div ref={ratingDiv} className="rating">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  );
};

export default Rating;
