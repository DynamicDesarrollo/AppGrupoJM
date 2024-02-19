import { useDispatch } from "react-redux"
import { clearToken } from "../../api/autSlice"

export const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Llamar a la acción clearToken para realizar el logout
        dispatch(clearToken());
        // Aquí podrías realizar otras acciones de limpieza si es necesario
    };
    return (
        <button onClick={handleLogout}>
            Cerrar sesión
        </button>
    )
}
