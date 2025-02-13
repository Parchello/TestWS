import { createSlice } from "@reduxjs/toolkit";
import { inventoryData } from "../../data/inventory";

const initialState = {
  items: inventoryData,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > action.payload.quantity) {
        item.quantity -= action.payload.quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addItem, removeItem } = inventorySlice.actions;
export default inventorySlice.reducer;
