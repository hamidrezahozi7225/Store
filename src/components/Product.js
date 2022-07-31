import React, { useContext } from "react";
import { AddPlus, DeleteDec, trimTitle } from "../helper/function";
import { Link } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import trash from "../image/trash.svg";
import styled from "./Product.module.css";

const Product = ({ products }) => {
  const { state, dispatch } = useContext(CartProvider);
  // console.log(state.count);
  const { image, title, price, category, id } = products;

  return (
    <div>
      <div className={styled.container}>
        <img src={image} alt="product" className={styled.image} />
        <h3>{trimTitle(title)}</h3>
        <p>{category}</p>
        <span>{price}$</span>
        <br />
        <div className={styled.buttons}>
          <div>
            <Link to={`/product/${id}`}>Details </Link>
          </div>
          <div>Numbers : {DeleteDec(state, id)}</div>
          <div className={styled.buttonsshop}>
            {AddPlus(state, id) ? (
              <button
                className={styled.plusbutoon}
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: products })
                }
              >
                +
              </button>
            ) : (
              <button
                className={styled.addbutoon}
                onClick={() =>
                  dispatch({ type: "ADDTOCART", payload: products })
                }
              >
                Add To Cart
              </button>
            )}
            {DeleteDec(state, id) === 1 && (
              <button
                className={styled.removebutton}
                onClick={() =>
                  dispatch({ type: "REMOVECART", payload: products })
                }
              >
                <img src={trash} alt="trash" className={styled.trash} />
              </button>
            )}
            {DeleteDec(state, id) > 1 && (
              <button
                className={styled.minbutton}
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: products })
                }
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
