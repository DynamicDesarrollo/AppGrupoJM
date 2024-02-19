import { LineChars } from "../../componentes/LineChars"

export const Home = () => {
  return (
    <div>
      <div className="bg-primary rounded-lg mr-4 p-3 x-2 items-center">
        <h1 className="mb-2 border-gray-100 text-gray-100">Analisis</h1>
        <hr className="mb-2"></hr>
        <div className="flex items-center justify-between">
          <div className="gap-4 rounded-lg w-1/2">
            <h1 className="text-sm ml-2 p-2">Obras en ejecución</h1>
            <div className="bg-white  ml-4 rounded-lg ">
              <LineChars />
            </div>
          </div>
          <div className="gap-4 rounded-lg w-1/2">
            <h1 className="text-sm ml-2 p-2">Obras en ejecución</h1>
            <div className="bg-white ml-4 rounded-lg ">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
