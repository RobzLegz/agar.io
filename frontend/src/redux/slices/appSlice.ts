import { createSlice } from '@reduxjs/toolkit';

export interface User{
    username: string;
    position: {
        x: number;
        y: number;
    }
}

export interface AppInfo {
    users: User[];
}

const initialState: AppInfo = {
    users: [],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        receiveUser: (state, action) => {
            state = {
                ...state,
                users: [...state.users, action.payload],
            };

            return state;
        },
    },
});

export const { receiveUser } = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;
