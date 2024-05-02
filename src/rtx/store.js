/* Redux test */
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/CounterSlice";
import { brandsReducer } from "./slices/brandsSlice";

export let x = configureStore({
  reducer: {
    counterData: counterReducer,
    brandsData: brandsReducer,
  },
});
