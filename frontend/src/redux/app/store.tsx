import { configureStore } from '@reduxjs/toolkit';
import socketReducer from '../slices/socketSlice';
import appReducer from '../slices/appSlice';

const store = configureStore({
    reducer: {
        socket: socketReducer,
        app: appReducer,
    },
});

export default store;
