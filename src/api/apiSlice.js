import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setTokenAndUser } from './autSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders:(headers, { getState }) => {
            try {
                const token = getState().auth.token;
                console.log('Token en prepareHeaders:', token);
                if (token) {
                    headers.set('x-access-token', `${token}`);
                }
                
                return headers;
            } catch (error) {
                console.error('Error al preparar los encabezados:', error);
                return headers;
            }
        }
    }),
    //tagTypes: ['Auth'],
    endpoints: (builder) => ({
        getUsuarios: builder.query({
            query: (page = 1) => `/usuarios?page=${page}&limit=3`,
            //providesTags: ['Auth']
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        addAuthPost: builder.mutation({
            query: (newAuth) => ({
                url: '/api/auth/signup',
                method: 'post',
                body: newAuth
            }),

            //invalidatesTags: ['Auth']
        }),
        login: builder.mutation({
            query: (loginData) => ({
                url: '/api/auth/signin',
                method: 'post',
                body: loginData
            }),
            onSuccess: (result, variables, api) => {
                // Almacena el token en el estado de Redux usando la acción setToken
                console.log('Resultado del inicio de sesión:', result);
                const {token } = result.data;
                const user = result.data.user
                console.log('Resultado del inicio de sesión User:', user);
                if (token) {
                    // Despacha la acción setToken para actualizar el estado de autenticación
                    api.dispatch(setTokenAndUser({ token,user: result.data.user}));
                    console.log('Inicio de sesión exitoso. Token:', token);
                } else {
                    console.error('Error de inicio de sesión: No se recibió el token esperado');
                }
            },
            //invalidatesTags: ['Auth']
        }),
        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: product
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            })
        })
    })

})

export const { useGetUsuariosQuery, useAddAuthPostMutation, useLoginMutation } = apiSlice