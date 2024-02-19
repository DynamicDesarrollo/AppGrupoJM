import { Link } from "react-router-dom"
import { useAddAuthPostMutation } from "../../api/apiSlice"
import { useEffect, useState } from "react"

import img from "../../assets/1.jpg"
import { RiEdit2Line } from "react-icons/ri"

export const Perfil = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [nombres, setNombres] = useState('')
    const [ruta_imagen, setRuta_Imagen] = useState(null)

    const [imagenPreview, setImagenPreview] = useState(null);

    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [contrasenasIguales, setContrasenasIguales] = useState(true);

    const [showAlert, setShowAlert] = useState(false);

    const rol_id = 1

    const [createAuth, { isLoading, error }] = useAddAuthPostMutation()

    useEffect(() => {
        if (showAlert) {
            // Oculta la alerta después de 3000 milisegundos (3 segundos)
            const timeoutId = setTimeout(() => {
                setShowAlert(false);
                setContrasenasIguales(true);
            }, 3000);

            // Limpia el temporizador cuando el componente se desmonta o cuando showAlert cambia
            return () => clearTimeout(timeoutId);
        }
    }, [showAlert, contrasenasIguales]);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log('Imagen seleccionada:', file);

        // Leer la imagen como un objeto de datos URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagenPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }

        setRuta_Imagen(file);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        alert("hola")
        // Verificar si las contraseñas son iguales
        // if (contrasena === confirmarContrasena) {
        // Realizar el registro o la acción necesaria
        //console.log('Nombre : ' + ruta_imagen)

        const ruta_imagen = new FormData()
        ruta_imagen.append('file', ruta_imagen)

        await createAuth({ usuario, contrasena, rol_id, nombres, ruta_imagen }).unwrap()
        // Aquí puedes llamar a tu función de registro o hacer lo que necesites
        setContrasena('')
        setUsuario('')
        setNombres('')
        setConfirmarContrasena('')

        setShowAlert(true);
        // } else {
        // Mostrar un mensaje de error o realizar alguna acción
        //     setContrasenasIguales(false);
        // }
    }
    return (
        <div className="bg-primary rounded-xl p-4 mr-3 -mt-3">
            <h1 className="text-sm text-gray-100">Perfil</h1>
            <hr className="my-4 border-gray-400 mb-4" />
            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <div className="w-1/4">
                        <p>Foto</p>
                    </div>
                    <div className="flex-1">
                        <div className="relative mb-2">
                            <input
                                type="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                name="ruta_imagen"
                            />

                            <label
                                htmlFor="avatar"
                                className="absolute p-2 rounded-full hover:cursor-pointer hover:bg-primary -top-3 left-24 bg-secundary-1000">
                                <RiEdit2Line />
                            </label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Tipo de archivos : png, jpg, jpeg
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-1/4">
                        <p>Nombres <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Nombre(s)"
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Apellido(s)" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-1/4">
                        <p>Número de Contacto <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Nro de Contacto" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-1/4">
                        <p>Dirección <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Dirección" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-1/4">
                        <p>Correo Electronico <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Correo Electronico"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />

                        </div>
                    </div>
                    <div className="w-1/4 ml-5">
                        <p>Contraseña <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 ">
                        <div className="w-full mr-7 ">
                            <input
                                type="password"
                                className="w-full py-1 px-3 rounded-lg outline-none bg-secundary-1000 "
                                placeholder="Contraseña"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                            />

                        </div>
                    </div>
                </div>

                <hr className="my-4 border-gray-400 mb-4" />
                <div className="flex justify-end">
                    <button
                        disabled={isLoading || !usuario}
                        type="submit"
                        className="bg-secundary-buton/80 text-black py-2 px-4 rounded-lg hover:bg-secundary-buton transition-colors">
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

        </div>
    )
}