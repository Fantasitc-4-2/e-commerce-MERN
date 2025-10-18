import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const getCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/carts");
      return res.data.cartUser.data;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/post",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/carts`, { productId: id });
      return res.data.cartUser.data;
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
      return res.data.cartUser.data;
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
      return res.data.cartUser.data;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

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
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.items = action.payload?.items || [];
        state.totalPrice = action.payload?.totalPrice || 0;
        state.error = null;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.items = action.payload?.items || [];
        state.totalPrice = action.payload?.totalPrice || 0;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteItemCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItemCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.items = action.payload?.items || [];
        state.totalPrice = action.payload.totalPrice || 0;
        state.error = null;
      })
      .addCase(deleteItemCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.items = action.payload?.items || [];
        state.totalPrice = action.payload.totalPrice || 0;
        state.error = null;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
