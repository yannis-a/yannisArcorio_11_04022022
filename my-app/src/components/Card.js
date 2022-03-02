import React from "react";

const Card = (props) => {
    const {data} = props;
  return (
    <a href="/" className="card">
      <img src={data.cover} alt="preview de la location" />
      <span>{data.title}</span>
    </a>
  );
};

export default Card;
