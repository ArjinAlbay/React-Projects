import React from "react";

function SupplierItem(props) {
  let removeItem = (proptanGonderilenId) => {
    props.deleteItem(proptanGonderilenId);
  };
  return (
    <>
      <div>
        <p> Company Name: {props.supplier.companyName} </p>
        <p> contactName: {props.supplier.contactName} </p>
        <p> contactTitle: {props.supplier.contactTitle} </p>
        <button onClick={() => removeItem(props.supplier.id)}> Remove</button>
      </div>
    </>
  );
}

export default SupplierItem;
