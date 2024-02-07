import { useCart } from '../context/cart.context';
import BascketCard from '../module/BascketCard';
import styles from './Bascket.module.css';

const Bascket = () => {
  const { state, dispatch }: any = useCart();
  return (
    <div className={styles.container}>
      <div className={styles.check}>
        <h1>Total Price: </h1>
        <h3>{state.sumPrice && state.sumPrice.toFixed(2)}$</h3>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>Payment</button>
      </div>
      <div className={styles.product}>
        {state.selectedProduct.map((item: any) => (
          <BascketCard key={item.id} data={item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Bascket;
