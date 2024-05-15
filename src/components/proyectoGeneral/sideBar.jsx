import Link from "next/link"

export default function SideBar(props){
    return(
        <div className="lg:w-[320px] mx-5 lg:mx-10 mt-10 lg:mt-0 mb-10">
        {/* Columna izquierda */} 
        
        <div className="cuadro w-full h-[420px]  rounded-lg p-2 flex flex-col justify-between py-4 px-4">
            <p className="text-center text-xl">Tareas</p>
            <Link href={`./${props.enlace}/tareas`} className="rounded-full text-center amarilloBack p-2 text-black font-bold">Editar tareas</Link>
        </div>
        <div className="cuadro mt-6 h-64 rounded-lg p-2 flex flex-col justify-between py-4 px-4">
            <p className="text-center text-xl">Integrantes</p>
            <Link href={`./${props.enlace}/tareas`} className="rounded-full text-center amarilloBack p-2 text-black font-bold">Editar integrantes</Link>
        </div>
    </div>
    )
}