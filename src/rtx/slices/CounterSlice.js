/* Redux test */
import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    initialState: {id: 1, name: "wego"},
    name: "counter",
    reducers: {
        changeName: () => {
            console.log("hello");
        }
    }
})

export let { changeName } = counterSlice.actions;
let counterReducer = counterSlice.reducer
export default counterReducer
