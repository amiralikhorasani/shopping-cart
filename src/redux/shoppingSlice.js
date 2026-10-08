import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [
    {
      id: 1,
      product_name: "Laptop",
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      product_name: "Mouse",
      price: 25,
      quantity: 2,
    },
    {
      id: 3,
      product_name: "Keyboard",
      price: 100,
      quantity: 1,
    },
    {
      id: 4,
      product_name: "Monitor",
      price: 200,
      quantity: 1,
    },
    {
      id: 5,
      product_name: "Headphones",
      price: 150,
      quantity: 1,
    },
  ],
  results: [],
  total: 1475,
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
    search(state, action) {
      state.results = action.payload.length > 0 ? action.payload : [];
    },
  },
});

export const { add, remove, incQuantity, decQuantity, search } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
