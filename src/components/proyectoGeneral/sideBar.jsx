import Link from "next/link"
import Image from "next/image"


export default function SideBar(props){

    

    return(
        <div className="lg:w-[320px] mx-5 lg:mx-10 mt-10 lg:mt-0 mb-10">
        {/* Columna izquierda */} 
        
        <div className="cuadro w-full h-[420px]  rounded-lg p-2 flex flex-col justify-between py-4 px-4">
            <p className="text-center text-xl">Tareas</p>
            <Link href={`./${props.enlace}/tareas`} className="rounded-full text-center amarilloBack p-2 text-black font-bold">Editar tareas</Link>
        </div>

        <div className="cuadro mt-6 min-h-64 max-h-80 rounded-lg p-2 flex flex-col justify-between py-4 px-4 pt-3">
            <p className="text-center text-xl pb-2">Integrantes</p>
            <div className="overflow-auto mb-2">
                    {
                        props.datos.integrantes.map((e, index)=> (
                            <div key={index} className="flex mb-2">
                                <Image src={e.imagen} width={35} height={35} alt="foto" className="rounded-full"/>
                                <p className="ml-3 mt-1">{e.nombre}</p> 
                            </div>
                        ))
                    }
            </div>



            <Link href={`./${props.enlace}/tareas`} className="rounded-full text-center amarilloBack p-2 text-black font-bold ">Editar integrantes</Link>
        </div>
    </div>
    )
}