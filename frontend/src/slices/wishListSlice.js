import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const getWishList = createAsyncThunk(
  "wishlist/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/wishlist");

      return res.data.products;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);

export const addToWishList = createAsyncThunk(
  "wishlist/post",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/wishlist`, { productId: id });

      return res.data.products;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);
export const deleteItemWishList = createAsyncThunk(
  "wishlist/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/wishlist/${id}`);
      return res.data.products;
    } catch (err) {
      return rejectWithValue(err.response?.data.error);
    }
  }
);
export const clearWishList = createAsyncThunk(
  "wishlist/clear",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/wishlist`);
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
  state.wishlist = action.payload;
  // state.items = action.payload?.items || [];

  state.error = null;
};

const pending = (state) => {
  state.loading = true;
  state.error = null;
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: null,
    // items: [],

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishList.pending, pending)
      .addCase(getWishList.fulfilled, fulfilled)
      .addCase(getWishList.rejected, rejected)
      .addCase(addToWishList.pending, pending)
      .addCase(addToWishList.fulfilled, fulfilled)
      .addCase(addToWishList.rejected, rejected)
      .addCase(deleteItemWishList.pending, pending)
      .addCase(deleteItemWishList.fulfilled, fulfilled)
      .addCase(deleteItemWishList.rejected, rejected)
      .addCase(clearWishList.pending, pending)
      .addCase(clearWishList.fulfilled, fulfilled)
      .addCase(clearWishList.rejected, rejected);
  },
});

export default wishlistSlice.reducer;
