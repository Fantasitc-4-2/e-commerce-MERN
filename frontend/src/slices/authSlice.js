import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

// 🔹 Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      return res.data.user; // backend returns { user, message }
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Login failed");
    }
  }
);

// 🔹 Get current logged-in user
export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/me");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Not logged in");
    }
  }
);

// 🔹 Logout user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await api.post("/auth/logout");
  localStorage.removeItem("token"); // optional, since you use cookies
});

// ✅ Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // FetchMe cases
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchMe.rejected, (state) => {
        state.user = null;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
