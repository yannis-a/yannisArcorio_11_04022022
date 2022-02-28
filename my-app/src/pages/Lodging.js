import React from "react";
import { useParams } from "react-router-dom";

const Kasa = () => {
  const params = useParams();

  return (
    <div>
      <h1>Votre Kasa {params.id}</h1>
    </div>
  );
};

export default Kasa;
