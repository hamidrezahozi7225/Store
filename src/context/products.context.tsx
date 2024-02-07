import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstanst from '../axios/axios-instans';

//@ts-ignore

const ProductContext: any = createContext();

const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await axiosInstanst.get('/products');
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products: object[] = useContext(ProductContext);
  return products;
};

export default ProductProvider;
export { useProducts };
