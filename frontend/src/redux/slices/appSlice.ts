import { createSlice } from '@reduxjs/toolkit';

export interface AppInfo {
    joined: boolean;
}

const initialState: AppInfo = {
    joined: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        handleJoined: (state, action) => {
            state = {
                ...state,
                joined: action.payload,
            };

            return state;
        },
    },
});

export const { handleJoined } = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;
