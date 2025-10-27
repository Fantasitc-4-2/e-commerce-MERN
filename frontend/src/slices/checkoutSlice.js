import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
  status: "idle", 
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutItems(state, action) {
      state.items = (action.payload || []).map(it => ({
        id: it.id,
        name: it.name,
        price: Number(it.price),
        quantity: Number(it.quantity ?? 1),
        image: it.image,
        description: it.description,
      }));
      state.status = "idle";
      state.error = null;
    },
    updateQuantity(state, action) {
      const { id, delta } = action.payload;
      const idx = state.items.findIndex(i => i.id === id);
      if (idx >= 0) {
        state.items[idx].quantity = Math.max(1, state.items[idx].quantity + delta);
      }
    },
    clearCheckout(state) {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
    setStatus(state, action) {
      state.status = action.payload;
      if (action.payload !== "error") state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const {
  setCheckoutItems,
  updateQuantity,
  clearCheckout,
  setStatus,
  setError,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
