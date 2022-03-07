import React from "react";

const Tag = (props) => {
  const { tag } = props;
  return <li className="tag">{tag}</li>;
};

export default Tag;
