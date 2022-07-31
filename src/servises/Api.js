import axios from "axios";

export const getProduct = async () => {
  const { data: product } = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return product;
};
