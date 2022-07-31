import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext";
import { trimTitle } from "../helper/function";

const DetailProduct = () => {
  const product = useContext(ProductProvider);
  const params = useParams();
  const detailProduct = product[params.id - 1];

  const { image, title, price, category, description } = detailProduct;

  return (
    <div>
      <img src={image} alt="product" width="200px" />
      <h2>{trimTitle(title)}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <span>{price}</span>
    </div>
  );
};

export default DetailProduct;
