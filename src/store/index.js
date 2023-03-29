import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './slices/auth';

const store = configureStore({
    reducer: {
        [AuthSlice.name]: AuthSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export default store;