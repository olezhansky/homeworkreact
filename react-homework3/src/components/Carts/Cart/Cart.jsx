import React from "react";

const Cart = ({ product }) => {
  console.log(product);
  return <li>{product.name}</li>;
};

export default Cart;
