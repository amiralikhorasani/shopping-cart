import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  total: 0,
};

function totalCalc(carts) {
  return carts
    .map((cart) =>
      cart.quantity === 1 ? cart.price : cart.price * cart.quantity,
    )
    .reduce((sum, price) => sum + price, 0);
}

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    add: {
      prepare({ productName, price }) {
        return {
          payload: { productName, price },
        };
      },

      reducer(state, action) {
        state.carts.push({
          id: new Date().getTime(),
          product_name: action.payload.productName,
          price: action.payload.price,
          quantity: 1,
        });
        state.total = totalCalc(state.carts);
      },
    },
    remove(state, action) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      state.total = totalCalc(state.carts);
    },
    incQuantity(state, action) {
      state.carts = state.carts.map((cart) =>
        cart.id === action.payload
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart,
      );
      state.total = totalCalc(state.carts);
    },
    decQuantity(state, action) {
      state.carts = state.carts.map((cart) =>
        cart.id === action.payload
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart,
      );
      state.total = totalCalc(state.carts);
    },
  },
});

export const { add, remove, incQuantity, decQuantity } = shoppingSlice.actions;

export default shoppingSlice.reducer;
