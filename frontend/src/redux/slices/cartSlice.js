import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity *
          parseFloat(existingItem.currentPrice.replace("$", ""));
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: parseFloat(product.currentPrice.replace("$", "")),
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += parseFloat(product.currentPrice.replace("$", ""));
    },
    decreaseCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice =
            existingItem.quantity *
            parseFloat(existingItem.currentPrice.replace("$", ""));
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.name !== product.name
          );
        }
        state.totalQuantity -= 1;
        state.totalPrice -= parseFloat(product.currentPrice.replace("$", ""));
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.name === product.name
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter(
          (item) => item.name !== product.name
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
