import React from "react";

const Header = ({ imgName }) => {
  const url = "/img/" + imgName;
  return (
    <div className="header">
      <img src={url} alt="bannière home" />
    </div>
  );
};

export default Header;
