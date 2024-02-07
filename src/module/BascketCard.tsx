import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';
import styles from './BascketCard.module.css';
import { FaTrash } from 'react-icons/fa';
import { LiaCartPlusSolid } from 'react-icons/lia';

const BascketCard = ({ data, dispatch, totalPrice }: any) => {
  const { image, category, description, price, quantity, rating, title, id } =
    data;

  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src={image} alt='image' />
      </div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>Description: </span>
          {description}
        </p>
        <div className={styles.detail}>
          <h4>
            <span>Category: </span>
            {category}
          </h4>
          <h4>
            <span>Price: </span>
            {price}$
          </h4>
          <h4>
            <span>Rating: </span>
            {rating.rate}
          </h4>
        </div>
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
              <button onClick={() => dispatch({ type: 'ADD', payload: data })}>
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
      </div>
      <hr />
    </div>
  );
};

export default BascketCard;
