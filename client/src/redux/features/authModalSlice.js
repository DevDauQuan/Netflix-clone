import { createSlice } from "@reduxjs/toolkit";

export const authModelSlice = createSlice({
    name: "AuthModal",
    initialState: {
        authModalOpen: false,
    },
    reducers: {
        setAuthModelOpen: (state, action) => {
            state.authModalOpen = action.payload
        },

    }
});

export const { setAuthModelOpen } = authModelSlice.actions;

export default authModelSlice.reducer;