import React, { createContext, useReducer } from "react";

const intialvalue = {
  items: [],
  total: 0,
  count: 0,
};

const sumItem = (item) => {
  const count = item.reduce((total, product) => total + product.quantity, 0);
  const total = item
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);
  return { count, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      console.log(state.items, state.count);
      return {
        ...state,
        items: [...state.items],
        ...sumItem(state.items),
      };
    case "REMOVECART":
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        items: [...newItems],
        count: state.count - 1,
      };

    case "INCREASE":
      const indexI = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[indexI].quantity++;
      return {
        ...state,
        ...sumItem(state.items),
      };
    case "DECREASE":
      const indexD = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[indexD].quantity--;
      return {
        ...state,
        ...sumItem(state.items),
      };
    default:
      return state;
  }
};
export const CartProvider = createContext();

const CartContext = (props) => {
  const [state, dispatch] = useReducer(cartReducer, intialvalue);

  return (
    <CartProvider.Provider value={{ state, dispatch }}>
      {props.children}
    </CartProvider.Provider>
  );
};

export default CartContext;
