import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Layout
import { LayoutAdmin } from './layouts/LayoutAdmin'

// Paginas auth
import { Login } from "./paginas/auth/Login"
import { Registrar } from './paginas/auth/Registrar'
import { RecuperarContrasena } from './paginas/auth/RecuperarContrasena'

// Paginas Admin
import { Home } from './paginas/admin/Home'

import { Error404 } from './paginas/Error404'
import { Perfil } from './paginas/admin/Perfil'
import { Tikets } from './paginas/admin/Tikets'
import { Listar } from './paginas/admin/Listar'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='registro' element={<Registrar/>} />
          <Route path='tikets' element={<Tikets />} />
          <Route path='listar' element={<Listar />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

