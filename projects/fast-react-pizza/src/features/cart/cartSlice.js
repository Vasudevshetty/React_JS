import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totolPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totolPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totolPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
