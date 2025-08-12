import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    showCounter: true
}

// Using the createSlice function from Redux Toolkit simplifies the creation of reducers and actions
// It automatically generates action creators and action types based on the reducer names
const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload;
        },
        decrement(state) {
            state.count -= 1;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
// CountReducer() is the reducer function without using redux toolkit
/*const countReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            count: state.count + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            count: state.count - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            count: state.count,
            showCounter: !state.showCounter
        };
    }
    return state;
}*/
const store = configureStore({
    reducer: {count: countSlice.reducer}
});

export const countActions = countSlice.actions; // Exporting the actions to be used in components

export default store;