import React, { useContext, useEffect, useState } from 'react';
import axiosInstanst from '../axios/axios-instans';
import { useLocation, useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import { useCart } from '../context/cart.context';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { showquantity } from '../helper/function';
import { FaTrash } from 'react-icons/fa';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

const ProductDetails = () => {
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const { state, dispatch }: any = useCart();

  useEffect(() => {
    const getDetails = async () => {
      const data = await axiosInstanst.get(`/products/${productId}`);
      setProduct(data);
    };
    getDetails();
  }, []);
  const { image, title, description, price, id }: any = product;
  const quantity = showquantity(state, id);
  return (
    <div className={styles.container}>
      <img src={image} alt='image' />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>
          <span>Description</span> : {description}
        </p>

        <div className={styles.btn}>
          <div>
            {quantity == 1 && (
              <button onClick={() => dispatch({ type: 'REMOVE', payload: id })}>
                <FaTrash />
              </button>
            )}

            {quantity > 1 && (
              <button
                onClick={() => dispatch({ type: 'DECREASE', payload: id })}
              >
                <IoIosRemoveCircle />
              </button>
            )}
          </div>
          <div>{quantity != 0 && quantity}</div>
          <div>
            {quantity === 0 ? (
              <button
                onClick={() => dispatch({ type: 'ADD', payload: product })}
              >
                <LiaCartPlusSolid />
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: 'INCREASE', payload: id })}
              >
                <IoIosAddCircle />
              </button>
            )}
          </div>
        </div>
        <h2> Price :{price}$</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
