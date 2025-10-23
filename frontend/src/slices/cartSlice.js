import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const getCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/carts");
      return res.data.cartUser;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/post",
  async ({ id, quantity = 1 }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/carts`, { productId: id, quantity });
      return res.data.cartUser;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/update",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/carts/${id}`, { quantity });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

export const deleteItemCart = createAsyncThunk(
  "cart/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/carts/${id}`);
      return res.data.result;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const fulfilled = (state, action) => {
  state.loading = false;
  state.cart = action.payload;
  state.items = action.payload?.items || [];
  state.totalPrice = action.payload?.totalPrice || 0;
  state.error = null;
};

const pending = (state) => {
  state.loading = true;
  state.error = null;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    items: [],
    totalPrice: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending,pending)
      .addCase(getCart.fulfilled,fulfilled)
      .addCase(getCart.rejected,rejected)
      .addCase(addToCart.pending,pending)
      .addCase(addToCart.fulfilled, fulfilled)
      .addCase(addToCart.rejected, rejected)
      .addCase(deleteItemCart.pending,pending)
      .addCase(deleteItemCart.fulfilled,fulfilled)
      .addCase(deleteItemCart.rejected, rejected)
      .addCase(updateCart.pending,pending)
      .addCase(updateCart.fulfilled,fulfilled)
      .addCase(updateCart.rejected,rejected);
  },
});

export default cartSlice.reducer;
