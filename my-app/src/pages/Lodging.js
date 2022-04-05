import React from "react";
import CardText from "../components/CardText";
import Tags from "../components/Tags";
import User from "../components/User";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import data from "../data.json";
import NotFound from "./NotFound";

const Kasa = () => {
  const params = useParams();
  const lodgingData = data.find((e) => e.id === params.id);
  if (lodgingData !== undefined) {
    return (
      <div className="lodging">
        <Carousel pictures={lodgingData.pictures} />
        <section className="informations">
          <div>
            <h1>{lodgingData.title}</h1>
            <h4>{lodgingData.location}</h4>
            <Tags tags={lodgingData.tags} />
          </div>
          <div>
            <User host={lodgingData.host} />
            <Rating rating={lodgingData.rating} />
          </div>
        </section>
        <section className="descriptions">
          <CardText title="Description" text={[lodgingData.description]} />
          <CardText title="Équipements" text={lodgingData.equipments} />
        </section>
      </div>
    );
  }else{
    return <NotFound />
  }
};

export default Kasa;
