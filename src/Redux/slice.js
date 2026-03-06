import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);

      if (!item) {
        state.push(action.payload);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
