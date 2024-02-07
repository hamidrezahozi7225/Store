import { createContext, useContext, useReducer } from 'react';
import { sumPrices } from '../helper/function';

//@ts-ignore
const CartContext: any = createContext();

const initialValue = {
  sumPrice: 0,
  selectedProduct: [],
  countProduct: 0,
};

const reduseFunction = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      state.countProduct++;
      state.selectedProduct.push({ ...action.payload, quantity: 1 });
      const sumPrice = sumPrices(state.selectedProduct);

      return {
        ...state,
        sumPrice,
      };
    case 'REMOVE':
      state.countProduct--;
      const newSelectedItem = state.selectedProduct.filter(
        (item: any) => item.id !== action.payload
      );
      const removePrice = sumPrices(newSelectedItem);

      return {
        ...state,
        selectedProduct: newSelectedItem,
        sumPrice: removePrice,
      };

    case 'INCREASE':
      const indexData = state.selectedProduct.findIndex(
        (item: any) => item.id == action.payload
      );
      state.selectedProduct[indexData].quantity++;
      const addPrice = sumPrices(state.selectedProduct);

      return {
        ...state,
        sumPrice: addPrice,
      };
    case 'DECREASE':
      const indexProduct = state.selectedProduct.findIndex(
        (item: any) => item.id == action.payload
      );
      state.selectedProduct[indexProduct].quantity--;
      const minesPrice = sumPrices(state.selectedProduct);

      return {
        ...state,
        sumPrice: minesPrice,
      };

    case 'CLEAR':
      return {
        sumPrice: 0,
        selectedProduct: [],
        countProduct: 0,
      };

    default:
      break;
  }
};

const CartProvider = ({ children }: any) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reduseFunction, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const cart: object[] = useContext(CartContext);
  return cart;
};

export default CartProvider;
export { useCart };
