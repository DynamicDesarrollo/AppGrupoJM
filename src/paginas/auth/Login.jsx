import { useState } from "react"
import { useDispatch } from "react-redux"
import {jwtDecode } from 'jwt-decode';
import { useLoginMutation } from "../../api/apiSlice"
import { Link, useNavigate } from "react-router-dom"
import { RiMailFill, RiLockFill } from "react-icons/ri"
import { setTokenAndUser } from "../../api/autSlice"

export const Login = () => {

  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')

  const dispatch = useDispatch(); 
  //const auth = useSelector((state) => state.auth);

  const [login, {isLoading}] = useLoginMutation()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ usuario, contrasena });
      console.log('Resultado del inicio de sesión:', result);

      // Verifica si 'data' está definido en la respuesta de la mutación
      if (result.data) {
        // Accede al token desde 'data'
        const token = result.data.token;
        //const user = result.data.user;
        console.log('Valor del token:', token);
        // Suponiendo que ya tienes el token almacenado en localStorage o en el estado del componente
        //const token = localStorage.getItem('token'); 
        
        // Decodifica el token para obtener la información del usuario y el rol
        const decodedToken = jwtDecode(token);
        const  user  = decodedToken.usuarioData.usuario;
        // Ahora, decodedToken contiene la información del usuario y el rol
        console.log('Token decodificado; ',user);
        localStorage.setItem('usuarioEncontrado', JSON.stringify(user));
        
        // Despacha la acción setToken para actualizar el estado de autenticación
        dispatch(setTokenAndUser({token,user}));
        console.log('Inicio de sesión exitoso. Token:', token);
        console.log('Usuario:', user);
        // Configura el encabezado de autorización para futuras solicitudes
        navigate('/');
      } else {
        console.error('Error de inicio de sesión: No se recibió el token esperado');
      }
    } catch (error) {
      // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
      console.error('Error de inicio de sesión:', error.message);
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-primary p-8 rounded-xl shadow-2xl w-auto lg:w-[450px">
        <h1 className="text-1xl text-center font-bold tracking-[5px] text-white mb-6">Iniciar Sesión</h1>
        <form className="mb-3" onSubmit={handleSubmit}>
          <button className="flex items-center jutify-center py-2 px-4 gap-4 bg-secundary-1000 w-full rounded-full mb-6">
            <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
              className="w-4 h-4" />
            Ingresar con google
          </button>
          <div className="relative mb-4"> 
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input
              type="email"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton text-colors"
              placeholder="Correo electronico"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input
              type="password"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="current-password" 
            />
          </div>
          <div>

            <button
              disabled={isLoading || !usuario}
              type="submit"
              className="bg-secundary-buton w-full py-2 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  <span className="ml-2">Iniciando Sesión...</span>
                </>
              ) : (
                "Iniciar Sesión"
              )
              }
            </button>

          </div>
        </form>
        <div className="flex flex-col gap-4 items-center text-gray-100">
          <Link to="/recuperar-contrasena" className="hover:text-secundary-buton transition-colors">¿Olvidaste tu contraseña?</Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta? <Link to="/registro" className="text-secundary-buton hover:text-gray-100 transition-colors">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
