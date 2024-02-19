import { createSlice } from '@reduxjs/toolkit'

const autSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setTokenAndUser: (state, action) => {
            console.log('Payload en setTokenAndUser:', action.payload);
            state.token = action.payload.token;
            state.user = action.payload.user || null;
        },
        clearToken: (state) => {
            state.token = null;
            state.user = null;
        },
    }
})
export const { setTokenAndUser, clearToken } = autSlice.actions;
export default autSlice.reducer
