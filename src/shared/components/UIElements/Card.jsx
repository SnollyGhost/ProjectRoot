import React from "react";

const Card = (props) => {
  return (
    <div
      className={`m-0 shadow-md rounded-lg p-4 overflow-hidden bg-white ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
