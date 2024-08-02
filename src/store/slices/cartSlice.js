import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../../services/LocalStorageService';

const initialState = {
  items: LocalStorageService.getItem('cartItems') || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      LocalStorageService.setItem('cartItems', state.items);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      LocalStorageService.setItem('cartItems', state.items);
    },
    clearCart: (state) => {
      state.items = [];
      LocalStorageService.setItem('cartItems', state.items);
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;