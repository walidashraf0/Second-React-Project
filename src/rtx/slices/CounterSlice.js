/* Redux test */
import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    initialState: {counter: 0, userName: 'Wego'},
    name: "counterSlice",
    reducers: {
        changeName: (state, actions) => {
            state.userName = "Zien";
        },
        increase: (state) => {
            state.counter +=1;
        },
        decrease: (state) => {
            state.counter -=1;
        },
        increaseByAmount: (state, action) => {
            state.counter +=action.payload;
        }
    }
})

export let counterReducer = counterSlice.reducer
export let { changeName, increase, decrease, increaseByAmount } = counterSlice.actions;
// export default counterReducer
