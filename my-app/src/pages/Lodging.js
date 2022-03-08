import React from "react";
import CardText from "../components/CardText";
import Tags from "../components/Tags";
import User from "../components/User";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Kasa = () => {
  const params = useParams();
  const lodgingData = data.find((e) => e.id === params.id);
  console.log(lodgingData);
  return (
    <div className="lodging">
      <Carousel  />
      <div className="informations">
        <h1>{lodgingData.title}</h1>
        <h4>{lodgingData.location}</h4>

        <Tags tags={lodgingData.tags} />
        <Rating rating={lodgingData.rating} />
        <User  />
      </div>

      <div className="descriptions">
        <CardText title="Description" text={[lodgingData.description]} />
        <CardText title="Équipements" text={lodgingData.equipments} />
      </div>
    </div>
  );
};

export default Kasa;
