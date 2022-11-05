import React from "react";
import { useContext } from "react";
import { cartContext } from "../store/CartContext";

function CartPage() {
  const { cart, setCart } = useContext(cartContext);

  const removeItem = (id) => {
    let newCart = cart.filter((q) => (q.id = !id));

    setCart(newCart);
  };

  return (
    <>
      <button onClick={() => setCart([])}> empty cart</button>
      <ul>
        {cart &&
          cart.map((item, key) => {
            return (
              <li key={key}>
                {item.name} - {item.price} * {item.quantity}{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  = {(item.price * item.quantity).toFixed(2)}
                </span>
                <button onClick={() => removeItem(item.id)}>Remove İtem</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default CartPage;
