import styles from './Card.module.css';
import { showquantity, summaryTitle } from '../helper/function';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { useCart } from '../context/cart.context';
import { FaTrash } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { IoIosRemoveCircle } from 'react-icons/io';
import { CgDetailsMore } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }: object | any) => {
  const navigate = useNavigate();
  const { image, title, price, category, id } = data;
  const { state, dispatch }: any = useCart();

  const quantity = showquantity(state, id);

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={image} alt='category' width='200px' />
        <h2>{summaryTitle(title)}</h2>
        <div className={styles.explain}>
          <span>{price}</span>
          <span>{category}</span>
        </div>
        <div className={styles.details}>
          <div
            //@ts-ignore
            onClick={() => navigate(`/products/${id}`)}
          >
            <CgDetailsMore />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <div>
          {quantity == 1 && (
            <button
              onClick={() => dispatch({ type: 'REMOVE', payload: data.id })}
            >
              <FaTrash color='white' />
            </button>
          )}

          {quantity > 1 && (
            <button
              onClick={() => dispatch({ type: 'DECREASE', payload: data.id })}
            >
              <IoIosRemoveCircle color='white' />
            </button>
          )}
        </div>
        <div>{quantity != 0 && quantity}</div>
        <div>
          {quantity === 0 ? (
            <button onClick={() => dispatch({ type: 'ADD', payload: data })}>
              <LiaCartPlusSolid color='white' />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'INCREASE', payload: data.id })}
            >
              <IoIosAddCircle color='white' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
