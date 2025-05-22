// redux principles

import { createSlice } from "@reduxjs/toolkit";

// 1. Action -> Event
// 2. Reducer Function -> function that takes state and action and returns new state
// 3. Store -> store the state of the application

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export const { reducer: counterReducer } =  counterSlice;