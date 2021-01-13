import React, { createContext, useReducer } from 'react'

const initialState = {
    isBottomNavHide : false,
    metodePembayaran: 1,
    searchText: '',
}

const store = createContext(initialState)

const { Provider } = store

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'IS_HIDE':
                return { ...state, isBottomNavHide : action.payload }
            case 'METODE_PEMBAYARAN':
                return { ...state, metodePembayaran : action.payload }
            case 'SEARCH_TEXT':
                return { ...state, searchText : action.payload }
            default:
                throw new Error();
        };
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider }