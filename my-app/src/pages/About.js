import React from "react";
import Header from "../components/Header";
import CardText from "../components/CardText";

const About = () => {
  const Text1 = {
    id: "1",
    title: "Fiabilité",
    textArray: [
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    ],
  };
  const Text3 = {
    id: "2",
    title: "Service",
    textArray: [
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    ],
  };
  const Text4 = {
    id: "3",
    title: "Sécurité",
    textArray: [
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ],
  };
  const Text2 = {
    id: "4",
    title: "Respect",
    textArray: [
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    ],
  };

  return (
    <div className="home">
      <Header imgName="about_header.png" />
      <CardText key={Text1.id} title={Text1.title} text={Text1.textArray} />
      <CardText key={Text2.id} title={Text2.title} text={Text2.textArray} />
      <CardText key={Text3.id} title={Text3.title} text={Text3.textArray} />
      <CardText key={Text4.id} title={Text4.title} text={Text4.textArray} />
    </div>
  );
};

export default About;
