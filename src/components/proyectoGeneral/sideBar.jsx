import Link from "next/link"
import Image from "next/image"


export default function SideBar(props){

    

    return(
        <div>
        {/* Columna izquierda */} 
        
        <div className="cuadro w-full h-[420px]  rounded-lg p-2 flex flex-col justify-between py-4 px-4">
            <p className="text-center text-xl">Tareas</p>
            <Link href={`./${props.enlace}/tareas`} className="rounded-full text-center amarilloBack p-2 text-black font-bold">Editar tareas</Link>
        </div>

        <div className="cuadro mt-6 min-h-64 max-h-72 rounded-t-lg p-2 flex flex-col py-4 px-4 pt-3">
            <p className="text-center text-xl pb-2">Integrantes</p>
            <div className="overflow-auto mb-2 mt-2">
                    {
                        props.datos.integrantes.map((e, index)=> (
                            <div key={index} className="flex mb-2 overflow-hidden">
                                <Image src={e.imagen} width={35} height={35} alt="foto" className="rounded-full w-8 h-8"/>
                                <p className="ml-3 mt-1">{e.nombre}</p> 
                            </div>
                        ))
                    }
            </div>



            
        </div>
    </div>
    )
}