import React, { useContext } from "react";
import { ProductProvider } from "../context/ProductContext";
import Product from "./Product";
import styled from "./Store.module.css";
import { RingLoader } from "react-spinners";

const Store = () => {
  const products = useContext(ProductProvider);

  const menProduct = products.filter(
    (item) => item.category === "men's clothing"
  );

  const womenProduct = products.filter(
    (item) => item.category === "women's clothing"
  );
  const jewelery = products.filter((item) => item.category === "jewelery");

  const electronics = products.filter(
    (item) => item.category === "electronics"
  );
  return (
    <>
      {products.length ? (
        <>
          <h1 className={styled.title}>Mens Product</h1>
          <div className={styled.container}>
            {menProduct.map((item) => (
              <Product key={item.id} products={item} />
            ))}
          </div>
          <h1 className={styled.title}>WoMens Product</h1>
          <div className={styled.container}>
            {womenProduct.map((item) => (
              <Product key={item.id} products={item} />
            ))}
          </div>
          <h1 className={styled.title}>jewelery</h1>
          <div className={styled.container}>
            {jewelery.map((item) => (
              <Product key={item.id} products={item} />
            ))}
          </div>
          <h1 className={styled.title}>electronics</h1>
          <div className={styled.container}>
            {electronics.map((item) => (
              <Product key={item.id} products={item} />
            ))}
          </div>
        </>
      ) : (
        <div className={styled.loader}>
          <RingLoader />
        </div>
      )}
    </>
  );
};

export default Store;
