import React, { useRef } from "react";

const CardText = (props) => {
  const collapser = useRef();
  const btnCollapse = useRef();
  const text = props.text.map((t) => <p key={t}>{t}</p>);

  const displayCollapser = () => {
    collapser.current.classList.toggle("open");
    collapser.current.classList.toggle("close");

    btnCollapse.current.children[0].classList.toggle("fa-angle-up");
    btnCollapse.current.children[0].classList.toggle("fa-angle-down");
  };

  return (
    <div className="cardText">
      <div>
        <h3>{props.title}</h3>
        <span ref={btnCollapse} onClick={displayCollapser}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
      <div ref={collapser} className="close">
        {text}
      </div>
    </div>
  );
};

export default CardText;
