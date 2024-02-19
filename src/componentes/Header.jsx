import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {
  RiArrowDownSLine,
  RiLogoutBoxRLine,
  RiNotification3Line,
  RiSettings3Line,

}
  from "react-icons/ri"
import img1 from "../assets/1.jpg"
import img2 from "../assets/3.jpg"
import { Logout } from "../paginas/auth/Logout"

export const Header = () => {
  const { user } = useSelector((state) => state.auth);
  console.log('Usuario encontrado en el header:', user); 
        


  return (
    <header className=" h-[10vh] border-b border-gray-400 bg-primary pl-4 py-4 flex items-center justify-end">
      <nav className="flex items-center gap-x-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secundary-1000 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 -right-0 bg-secundary-buton py-0.5 px-[5px] box-content 
              text-black rounded-full text-[8px] font-bold ">
                2
              </span>
            </MenuButton>
          }
          transition
          menuClassName="bg-secundary-1000 p-4"
        >
          <h1 className="text-gray-300 text-center font-medium">Notificaciones</h1>
          <hr className="my-1 border-gray-500"></hr>
          <MenuItem className="P-0  hover:bg-transparent ">
            <Link to="/notificaciones" className="flex items-center flex-1 gap-x-2 text-gray-300 py-2 px-2
            hover:bg-primary transition-colors rounded-lg ">
              <img
                src={img1}
                className="w-6 h-6 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Jorge Betancourt</span>
                  <span className="text-[8px]">17/01/2024</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Lorem, ipsu moder fin...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="P-0  hover:bg-transparent ">
            <Link to="/notificaciones" className="flex items-center flex-1 gap-x-2 text-gray-300 py-2 px-2
            hover:bg-primary transition-colors rounded-lg ">
              <img
                src={img2}
                className="w-6 h-6 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Francisico Guerra</span>
                  <span className="text-[8px]">11/09/2023</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Lorem, ipsu moder fin...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-1 border-gray-500"></hr>
          <MenuItem className="rounded-full hover:bg-primary  flex justify-center">
            <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>

        <Menu menuButton={
          <MenuButton
            className={"flex items-center gap-x-2  hover:bg-secundary-1000 py-2  px-4 rounded-lg transition-colors"}>
            <img
              src={img1}
              className="w-6 h-6 object-cover rounded-full"
            />
            <span>{user}</span>
            <RiArrowDownSLine />
          </MenuButton>
        }
          transition
          menuClassName="bg-secundary-1000 p-4"
        >
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-primary">
            <Link to="/registro" className="flex items-center gap-x-4">
              <img
                src={img1}
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm">Jorge Betancourt</span>
                <span className="text-[10px] text-gray-400">jorge@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-3 border-gray-500"></hr>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-primary">
            <Link to="/configuracion" className="flex items-center gap-x-4">
              <RiSettings3Line className=" rounded-full" />Configuración
            </Link>
          </MenuItem>
          <MenuItem className="rounded-lg transition-colors text-gray-300 hover:bg-primary">
            <Link to="/login" className="flex items-center gap-x-4">
              <RiLogoutBoxRLine className="" />
              <Logout />
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header >
  )
}
