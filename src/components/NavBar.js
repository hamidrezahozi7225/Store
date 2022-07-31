import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shop_cart from "../image/basket.svg";
import styled from "./NavBar.module.css";

import { CartProvider } from "../context/CartContext";
const NavBar = () => {
  const { state } = useContext(CartProvider);

  return (
    <div className={styled.container}>
      <Link to="/product"><h4>product</h4></Link>
      <br />
      <Link to="/buy">
        <div className={styled.posi}>
          <img src={shop_cart} alt="shopCart" width="30px" />
          <span> {state.count}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
