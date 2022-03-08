import React from "react";

const User = ({ host }) => {
  const firstName = host.name.split(" ")[0];
  const lastName = host.name.split(" ")[1];
  return (
    <div className="user">
      <div className="name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className="picture">
        <img src={host.picture} alt="profil" />
      </div>
    </div>
  );
};

export default User;
