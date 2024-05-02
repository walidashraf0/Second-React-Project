import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let getBrands = createAsyncThunk('brandsSlice/getBrands', async ()=> {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    return data.data;
})

export let getSpacificBrands = createAsyncThunk('brandsSlice/getSpacificBrands', async (brand_id)=> {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brand_id}`)
    return data.data;
})


let initialState = {
    brands: [],
    loading: false,
    isError: null,
};

let brandsSlice = createSlice({
    name: 'brandsSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder.addCase(getBrands.fulfilled, (state, action) => {
            state.loading = false;
            state.brands= action.payload;
        });
        builder.addCase(getBrands.pending, (state, action)=> {
            state.loading = true;
        });
        builder.addCase(getBrands.rejected, (state, action)=> {
            state.loading = false;
            // state.brands = action.payload;
        });
    }
    // extraReducers: {
    //     [getBrands.pending]: (state, action)=> {
    //         state.loading = true;
    //     },
    //     [getBrands.fulfilled]: (state, action)=> {
    //         state.loading = false;
    //         state.brands = action.payload;
    //     },
    //     [getBrands.rejected]: (state, action)=> {
    //         state.loading = false;
    //         // state.isError = action.payload;
    //     }
    // }
});

export let {} = brandsSlice.actions;
export let brandsReducer = brandsSlice.reducer;