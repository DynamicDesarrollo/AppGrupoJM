import { Outlet } from "react-router-dom"
import { Sidebar } from "../componentes/Sidebar"
import { Header } from "../componentes/Header"

export const LayoutAdmin = () => {
    return (
        <div className="min-h-screen grid grid-cols-6">
            <Sidebar />
            <div className="col-span-5 p-0">
                <Header />
                <div className="h-[80vh] py-6 pl-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
