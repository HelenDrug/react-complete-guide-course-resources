import {useEffect, useState} from "react";

let globalState = {
    products: []
};
let listeners = [];
let actions = {};

export const useStore = () => {
    const set = useState(globalState)[1]

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = {
            ...globalState,
            ...newState
        }
        for (const listener of listeners) {
            listener(globalState)
        }
    }
    useEffect(
        () => {
            listeners.push(set)
            return () => {
                listeners = listeners.filter(l => l !== set)
            }
        }, [set]
    )
    return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = {
            ...globalState,
            ...initialState
        }
    }
    actions = {
        ...actions,
        ...userActions
    }
}