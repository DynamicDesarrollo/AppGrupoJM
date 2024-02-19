import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { apiSlice } from './api/apiSlice';
import autSlice, { setTokenAndUser } from './api/autSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: autSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


setupListeners(store.dispatch);

// Listener para actualizar el encabezado de autorización en cada solicitud
store.subscribe(() => {
    const {token,user } = store.getState().auth;
    console.log('Estado inicial del store:', token);
    console.log('Estado inicial del store user:', user);
    if (apiSlice.baseQuery) {
        apiSlice.baseQuery.prepareHeaders = (headers) => {
            if (token) {
                headers.set('x-access-token', `${token}`);
            }
            return headers;
        };
    }
});

// Inicializa el token en el estado si se recarga la página y hay un token en localStorage, por ejemplo
const initialToken = localStorage.getItem('token');
const initialUser = localStorage.getItem('user');
console.log('Token inicial:', initialToken);
console.log('Usuario inicial (sin parsear):', initialUser);
if (initialToken) {
   const parsedUser = initialUser ? JSON.parse(initialUser) : null;
   console.log('Usuario inicial (parseado):', parsedUser);
    store.dispatch(setTokenAndUser({ 
        token: initialToken,
        user: parsedUser}));
}