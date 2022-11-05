import React from "react";
import { useState } from "react";
import { categories } from "../data/categories";
import SupplierItem from "../propsSample/SupplierItem";

function SupplierList() {
  let [supplierListed, setSupplierListed] = useState(categories);

  let deleteItem = (itemdenGelenId) => {
    let newSuplierList = supplierListed.filter((q) => (q.id = !itemdenGelenId));
    setSupplierListed(newSuplierList);
  };

  return (
    <>
      {supplierListed &&
        supplierListed.map((item, key) => {
          return (
            <>
              <SupplierItem
                supplier={item}
                deleteItem={deleteItem}
              ></SupplierItem>
            </>
          );
        })}
    </>
  );
}

export default SupplierList;
