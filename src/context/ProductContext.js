import React, { createContext, useEffect, useState } from "react";
import { getProduct } from "../servises/Api";

export const ProductProvider = createContext();

const ProductContext = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      setProducts(await getProduct());
    };
    getApi();
  }, []);

  return (
    <ProductProvider.Provider value={products}>
      {props.children}
    </ProductProvider.Provider>
  );
};

export default ProductContext;
