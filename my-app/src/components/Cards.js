import React from "react";
import Card from "./Card";

const Cards = ({ dataKey }) => {
  const cards = dataKey.map((item, idx) => <Card key={idx} itemId={item.id} />);

  return <div className="cards">{cards}</div>;
};

export default Cards;
