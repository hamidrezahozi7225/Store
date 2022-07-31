import React, { useContext } from "react";
import { trimTitle } from "../helper/function";
import { CartProvider } from "../context/CartContext";
import trash from "../image/trash.svg";
import styled from "./Buy.module.css";

const Buy = () => {
  const { state, dispatch } = useContext(CartProvider);
  return (
    <div className={styled.content}>
      {state.items.map((item) => (
        <div key={item.id} className={styled.containter}>
          <img src={item.image} alt="product" className={styled.image} />
          <h3>{trimTitle(item.title)}</h3>
          <p style={{ color: "#5e057e" }}>{item.category}</p>
          <span>count: {item.quantity}</span>
          <br />
          <br />
          <span style={{ color: "#5e057e" }}>
            {item.price * item.quantity}$
          </span>
          <br />
          <div>
            <button
              className={styled.plusbutoon}
              onClick={() => dispatch({ type: "INCREASE", payload: item })}
            >
              +
            </button>
            {item.quantity === 1 && (
              <button
                className={styled.removebutton}
                onClick={() => dispatch({ type: "REMOVECART", payload: item })}
              >
                <img
                  src={trash}
                  alt="tash"
                  width="20px"
                  className={styled.trash}
                />
              </button>
            )}
            {item.quantity > 1 && (
              <button
                className={styled.minbutton}
                onClick={() => dispatch({ type: "DECREASE", payload: item })}
              >
                -
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
