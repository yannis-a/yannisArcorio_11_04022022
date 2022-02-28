import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="about">A Propos</NavLink>
    </nav>
  );
};

export default Navigation;
