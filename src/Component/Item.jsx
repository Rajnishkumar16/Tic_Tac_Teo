import React from "react";

const Item = (props) => {
  return (
    <div className="item-content" onClick={props.onClick}>
      <h3>{props.values}</h3>
    </div>
  );
};

export default Item;
