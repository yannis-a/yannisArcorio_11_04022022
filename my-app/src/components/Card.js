import React from "react";
import data from "../data.json";

const Card = (props) => {
  const { itemId } = props;
  const myData = data.find((e) => e.id === itemId);
  const path = "/lodging/" + myData.id;

  return (
    <a href={path} className="card">
      <img src={myData.cover} alt="preview de la location" />
      <span>{myData.title}</span>
    </a>
  );
};

export default Card;
