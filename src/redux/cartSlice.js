import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bucketItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBucket: (state, action) => {
      const newItem = action.payload;

      const existingItemIndex = state.bucketItems.findIndex(
        (item) =>
          item.name === newItem.name &&
          item.drink?.name === newItem.drink?.name &&
          item.addon?.name === newItem.addon?.name
      );

      if (existingItemIndex !== -1) {
        // Item already exists → just update qty
        state.bucketItems[existingItemIndex].qty += newItem.qty;
      } else {
        // New item → add to bucket
        state.bucketItems.push(newItem);
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.bucketItems.find((item) => item.id === id);
      if (item) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.bucketItems.find((item) => item.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },removeItem: (state, action) => {
    const id = action.payload;
    state.bucketItems = state.bucketItems.filter((item) => item.id !== id);
  },
    removeFromBucket: (state, action) => {
      state.bucketItems = state.bucketItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearBucket: (state) => {
      state.bucketItems = [];
    },
  },
});

export const { addToBucket, removeFromBucket, clearBucket,increaseQty,decreaseQty, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
