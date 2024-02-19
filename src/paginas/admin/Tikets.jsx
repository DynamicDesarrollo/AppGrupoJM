import { Link } from "react-router-dom"
import { Tab } from '@headlessui/react'

export const Tikets = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-y-4 mh-4">
                <div>
                    <h1 className="font-bold gray-100 text-xl">Descripción</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Link to="/home" className="hover:text-secundary-buton transition-colors">
                            Home
                        </Link>
                        <span>-</span>
                        <span>Centro de Soporte</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-secundary-buton/80 hover:bg-secundary-buton rounded-lg py-2- px-4 gap-2 transition-colors 
                    flex items-center text-black mr-5">Crear</button>
                </div>
            </div>
            <hr className="flex-1 border-gray-500 mr-5"></hr>
            {/* Contenido*/}
            <Tab.Group>
                <div className=" bg-primary my-3 mr-5 rounded-lg p-1">
                    <Tab.List className="flex items-center justify-between gap-2 py-3 px-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <Tab
                                className="py-2 px-4 rounded-lg hover:bg-secundary-1000 hover:text-gray-100 
                                transition-colors outline-none ui-selected:bg-secundary-1000">Tikets</Tab>
                            <Tab className="py-2 px-4 rounded-lg hover:bg-secundary-1000 hover:text-gray-100 
                                transition-colors outline-none ui-selected:bg-secundary-1000">PQR</Tab>
                            <Tab className="py-2 px-4 rounded-lg hover:bg-secundary-1000 hover:text-gray-100 
                                transition-colors outline-none ui-selected:bg-secundary-1000">Tab 3</Tab>
                        </div>
                        <div>
                            <button className="bg-secundary-buton/80 hover:bg-secundary-buton rounded-lg py-2- px-4 gap-2 transition-colors 
                                flex items-center text-black mr-5">Crear</button>
                        </div>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
