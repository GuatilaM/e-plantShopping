import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find((item) => item.name === action.payload.name);
      if (!itemExists){
        state.items.push({...action.payload, quantity: 1});
      } else {
        itemExists.quantity++;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const itemExists = state.items.find((item) => item.name === action.payload.name);
      if (itemExists){
        itemExists.quantity = action.payload.quantity;
      }
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
