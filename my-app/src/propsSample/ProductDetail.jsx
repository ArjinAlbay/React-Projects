import React from "react";

function ProductDetail(props) {
  return (
    <>
      <div>
        <p>Name: {props.name}</p>
        <p>description: {props.description}</p>
        <p>price: {props.unitPrice}</p>
      </div>
    </>
  );
}

export default ProductDetail;
