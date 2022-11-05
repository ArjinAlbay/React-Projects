import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../store/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(cartContext);

  let navigate = useNavigate();

  let goToDetail = (id) => {
    navigate(`/urunler/${id}`);
  };

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products`).then((res) => {
      return setProducts(res.data);
    });
  }, []);

  let addToCart = (item) => {
    // eğer ürün sepette varsa adedini arttırır yoksa ürünü sepete ekler
    let cartProduct = cart.find((q) => q.id === item.id);
    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity + 1;
      setCart([...cart]);
    } else {
      let newCartProduct = {
        id: item.id,
        name: item.name,
        price: item.unitPrice,
        quantity: 1,
      };

      setCart([...cart, newCartProduct]);
    }
  };

  let decreaseToCart = (item) => {
    let cartProduct = cart.find((q) => q.id === item.id);
    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity - 1;

      if (cartProduct.quantity == 0) {
        let newCart = cart.filter((q) => (q.id = !cartProduct.id));
        setCart(newCart);
      } else {
        setCart([...cart]);
      }
    }
  };

  return (
    <>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>unit price</td>
        </tr>

        {products &&
          products.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/urunler/` + item.id}>{item.name}</Link>
                </td>
                <td>{item.unitPrice}</td>
                <td>
                  <button
                    variant="outlined"
                    onClick={() => goToDetail(item.id)}
                  >
                    goToDetail
                  </button>
                </td>
                <td>
                  <button variant="outlined" onClick={() => addToCart(item)}>
                    +
                  </button>
                  <button
                    variant="outlined"
                    onClick={() => decreaseToCart(item)}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default ProductList;
