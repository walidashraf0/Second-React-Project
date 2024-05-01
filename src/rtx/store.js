/* Redux test */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/CounterSlice'

export let x = configureStore({
    reducer: {
        counterData: counterReducer
    },
})