import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {  useSelector } from "react-redux"

import { RiMailFill, RiLockFill, RiUserLine } from "react-icons/ri"
import { useAddAuthPostMutation } from "../../api/apiSlice"
//import { setToken } from "../../api/autSlice"


export const Registrar = () => {

 // const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  console.log('Token del usuario loguado:', token)

  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [nombres, setNombres] = useState('')
  const [ruta_imagen, setRuta_Imagen] = useState(null)

  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [contrasenasIguales, setContrasenasIguales] = useState(true);

  const [showAlert, setShowAlert] = useState(false);

  const rol_id = 1

  const [createAuth, { isLoading, error }] = useAddAuthPostMutation()


  useEffect(() => {
    if (showAlert || !contrasenasIguales) {
      // Oculta la alerta después de 3000 milisegundos (3 segundos)
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        setContrasenasIguales(true);
      }, 3000);

      // Limpia el temporizador cuando el componente se desmonta o cuando showAlert cambia
      return () => clearTimeout(timeoutId);
    }
  }, [showAlert, contrasenasIguales]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Imagen antes de enviar:', ruta_imagen);
    // Verificar si las contraseñas son iguales
    if (contrasena === confirmarContrasena) {
      console.log('Token entrando condicion contraseña:', token)
      const formData = new FormData();
      formData.append('usuario', usuario);
      formData.append('contrasena', contrasena);
      formData.append('rol_id', rol_id);
      formData.append('nombres', nombres);

      // Agregar la imagen al FormData solo si hay una imagen seleccionada
      if (ruta_imagen) {
        formData.append('ruta_imagen', ruta_imagen);
      }

      //dispatch(setToken(token))
      // Asegúrate de que el token sea válido y está presente
            // Realizar el registro o la acción necesaria
      await createAuth(formData).unwrap();

      // Aquí puedes llamar a tu función de registro o hacer lo que necesites
      setContrasena('');
      setUsuario('');
      setNombres('');
      setConfirmarContrasena('');
      setRuta_Imagen(null)

      setShowAlert(true);
    } else {
      // Mostrar un mensaje de error o realizar alguna acción
      setContrasenasIguales(false);
    }
  };
  return (
    <div className="bg-primary rounded-xl p-4 mr-3 -mt-3">
      <div className="bg-primary p-8 rounded-xl shadow-2xl w-auto lg:w-[450px">
        <h1 className="text-1xl text-center font-bold tracking-[5px] text-white mb-4">Crear Cuenta</h1>
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="relative mb-3">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input
              type="file"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton text-colors"
              placeholder="Nombre(s)"
              name="ruta_imagen"
              onChange={(e) => setRuta_Imagen(e.target.files[0])}
            />
          </div>
          <div className="relative mb-3">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input type="text"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton text-colors"
              placeholder="Nombre(s)"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div className="relative mb-3">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input type="email"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton text-colors"
              placeholder="Correo electronico"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="relative mb-3">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input type="password"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <div className="relative mb-3">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2 text-secundary-buton" />
            <input type="password"
              className="py-2 pl-8 pr-4 bg-secundary-1000 w-full outline-none rounded-lg focus:border focus:border-secundary-buton"
              placeholder="Confirmar Contraseña"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
            />
          </div>
          <div>
            {!contrasenasIguales && (
              <div className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 text-center">
                <p>Las contraseñas no coiciden</p>
              </div>
            )}
            <button
              disabled={isLoading || !usuario}
              type="submit"
              className="bg-secundary-buton w-full py-2 px-4 rounded-lg hover:text-gray-100 transition-colors" >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  <span className="ml-2">Registrando...</span>
                </>
              ) : (
                "Registrarme"
              )
              }
            </button>
            {error &&
              <div className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 text-center">
                <p>Error Registrando:  {error.error}</p>
              </div>
            }
            {showAlert && (
              <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center">
                <p>Registrado con Exito!</p>
              </div>
            )}
          </div>
        </form>
        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuenta? <Link to="/login" className="text-secundary-buton hover:text-gray-100 transition-colors">Ingresa</Link>
        </span>
      </div>
    </div>
  )
}
