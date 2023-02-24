import React from "react";
import { NavLink, useNavigation } from "react-router-dom";
import products from "../assets/data/products";
import { routes } from "../Routers/Routes";

function Shop() {
  const { state } = useNavigation();
  return state === "loading" ? (
    <h1>Loading</h1>
  ) : (
    <>
      {products.map((product) => (
        <li key={product.id}>
          {product.id}
          <h3>{product.productName}</h3>
          <NavLink to={routes.productDetails(product.id)}>Info</NavLink>
        </li>
      ))}
    </>
  );
}

export default Shop;
