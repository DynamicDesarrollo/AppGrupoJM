import { useState } from "react";
import { Link } from "react-router-dom"
import {
  RiBarChartGroupedFill,
  RiContactsBookLine,
  RiPassValidLine,
  RiToolsFill,
  RiLogoutBoxRLine,
  RiArrowRightSLine,
  RiHeadphoneLine
} from "react-icons/ri";

export const Sidebar = () => {

  const [showSubmenu, setShowSubMenu] = useState(false)
  return (
    <>
      <div className="h-[100vh] bg-primary p-2 flex flex-col justify-between border-r border-gray-400">
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Grupo JM
          </h1>
          <ul className="text-[14px]">
            <li>
              <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
                <RiBarChartGroupedFill className="text-secundary-buton" /> Estadisticas
              </Link>
            </li>
            <li>
              <button onClick={() => setShowSubMenu(!showSubmenu)} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
                <span className=" flex items-center gap-4">
                  <RiContactsBookLine className="text-secundary-buton" /> Actividades
                </span>
                <RiArrowRightSLine className={`mt-1 ${showSubmenu && "rotate-90"} transition-all`} />
              </button>
              <ul className={`my-2 ${!showSubmenu && 'hidden'}`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 
                                    before:h-3 before:absolute before:bg-secundary-buton before:rounded-full before:-left-[6.5px]
                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secundary-1000 hover:text-white">
                    Contratos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 
                                    before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px]
                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secundary-1000 hover:text-white">
                    Contratos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 
                                    before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px]
                                    before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secundary-1000 hover:text-white">
                    Contratos
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
                <RiPassValidLine className="text-secundary-buton" /> Responsables
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
                <RiToolsFill className="text-secundary-buton" /> Configuración
              </Link>
            </li>
            <li>
              <Link to="/tikets" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
                <RiHeadphoneLine className="text-secundary-buton" /> Soporte
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secundary-1000 transition-colors">
            <RiLogoutBoxRLine className="text-secundary-buton" /> Cerrar Sesión
          </Link>
        </nav>
      </div>
    </>
  )
}

