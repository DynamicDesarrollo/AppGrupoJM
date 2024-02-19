import { useGetUsuariosQuery } from "../../api/apiSlice" 

export const Listar = () => {
  const { data : usuarios, error, isLoading } = useGetUsuariosQuery()

  if(isLoading) return <div>Cargando...</div>
  
  if(error) return <div>Hubo un error al obtener los usuarios</div>
  
   return (
   <ul>
       {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.usuario}</li>
       ))}
   </ul>
   
  )
}
