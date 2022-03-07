import React from "react";
import Tag from "./Tag";

const Tags = (props) => {
  const { tags } = props;

  return (
    <ul className="tags">
      {tags.map((tag, i) => (
        <Tag key={i} tag={tag} />
      ))}
    </ul>
  );
};

export default Tags;
