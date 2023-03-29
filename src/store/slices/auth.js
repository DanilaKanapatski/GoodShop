import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    token: '',
    login: '',
};

const name = 'auth';

const slice = createSlice({
    name, initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setLogin(state, action) {
            state.login = action.payload;
        },
    },
});

export default slice;