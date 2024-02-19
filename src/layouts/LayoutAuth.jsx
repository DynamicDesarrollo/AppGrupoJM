import { Outlet } from "react-router-dom"

export const LayoutAuth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <Outlet />
    </div>
  )
}
