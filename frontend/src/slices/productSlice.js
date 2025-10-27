import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";


export const getAllProducts = createAsyncThunk(
    "products/getAll",
    async(params = {}, { rejectWithValue }) => {
        try {
            const page = params.page || 1;
            const limit = params.limit || 10;
            const res = await api.get("/products", { params });
            return {
                products: res.data,
                page,
                hasMore: res.data.length === limit // If we got full page, there might be more
            };
        } catch(err) {
            return rejectWithValue(err.response?.data.error);
        }
    }
)

const productSlice = createSlice({
    name:"getAllProducts",
    initialState:{
        products: [],
        loading: true,
        error: null,
        currentPage: 1,
        totalPages: 1,
        hasMore: true
    },
    reducers :{},
    extraReducers:  (builder) =>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading = true,
            state.error = null
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.products = action.payload.products;
            state.currentPage = action.payload.page;
            state.hasMore = action.payload.hasMore;
        })
    }
})

export default productSlice.reducer