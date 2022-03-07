import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import data from "../data.json";

const Home = () => {
  return (
    <div className="home">
      <Header imgName="home_header.png" />
      <Cards dataKey={data} />
    </div>
  );
};

export default Home;
