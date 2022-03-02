import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const { data } = props;

  return (
    <div className="cards">
      {data.map((e) => (
        <Card data={e} />
      ))}
    </div>
  );
};

export default Cards;
