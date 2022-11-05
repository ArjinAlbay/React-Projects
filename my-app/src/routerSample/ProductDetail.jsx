import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(`error`, err));
  }, []);

  console.log("id", id);
  return (
    <>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>unit price</td>
          <td>unitsInStock</td>
        </tr>

        {
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.unitPrice}</td>
            <td>{product.unitsInStock}</td>
          </tr>
        }
      </table>
    </>
  );
}

export default ProductDetail;
