import React from "react";

function prod(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
    </div>
  );
}
export default prod;
