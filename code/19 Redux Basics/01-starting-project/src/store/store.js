import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialCountState = {
    count: 0,
    showCounter: true
}

const initialAuthState = {
    isAuthenticated: false
}

// Using the createSlice function from Redux Toolkit simplifies the creation of reducers and actions
// It automatically generates action creators and action types based on the reducer names
const countSlice = createSlice({
    name: 'count',
    initialState: initialCountState,
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

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
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
    reducer: {
        count: countSlice.reducer,
        auth: authSlice.reducer
    }
});

export const countActions = countSlice.actions; // Exporting the actions to be used in components
export const authActions = authSlice.actions;

export default store;