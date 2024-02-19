// api.js
import axios from 'axios';
import store from './store';


const api = axios.create({
  baseURL: 'http://localhost:3000', // Ajusta la URL base según tu configuración
});

// Configura el encabezado de autorización para todas las solicitudes
// Configura un interceptor para manejar la actualización del token si es necesario
api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  const usuarioEncontrado = store.getState().auth.usuarioEncontrado;
  console.log('Token Interceptor:', usuarioEncontrado);
  console.log('Token Interceptor:', token);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});
  

export default api;
