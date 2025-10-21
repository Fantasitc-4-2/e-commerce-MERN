import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";


export const getAllProducts = createAsyncThunk(
    "products/getAll",
    async(_,{rejectWithValue})=>{
        try{
            const res = await api.get("/products");
            return res.data
        }catch(err){
            return rejectWithValue(err.response?.data.error)
        }
    }
)

const productSlice = createSlice({
    name:"getAllProducts",
    initialState:{
        products: [],
        loading:true,
        error: null
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
            state.loading = false,
            state.error = null,
            state.products = action.payload
        })
    }
})

export default productSlice.reducer