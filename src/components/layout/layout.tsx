import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart.context';
import styles from './layout.module.css';
import { FaHeart, FaShoppingBasket } from 'react-icons/fa';

const Layout = ({ children }: any) => {
  const { state }: any = useCart();
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.header}>
        <div>
          <h3 onClick={() => navigate('/')}>Store App</h3>
        </div>
        <div className={styles.bascket} onClick={() => navigate('/bascket')}>
          {!!state.countProduct && <span>{state.countProduct}</span>}
          <FaShoppingBasket size={35} />
        </div>
      </header>
      <div className={styles.body}>{children}</div>
      <footer className={styles.footer}>
        Develop by Hamid Hozi <FaHeart color='red' />
      </footer>
    </>
  );
};

export default Layout;
