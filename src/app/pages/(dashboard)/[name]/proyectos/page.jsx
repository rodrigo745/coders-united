import Image from "next/image"
import ModalCrearProyecto from "../../../../../components/modalCrearProyecto/modalCrearProyecto";

export default function Proyectos(){

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col-reverse lg:flex lg:flex-row  cuadro w-[350px] lg:w-[500px] xl:w-[650px] h-[300px] rounded-lg p-2 py-4 lg:py-2"> { /* Boton crear */ }
                <ModalCrearProyecto/> 
                <div className="flex justify-center w-full"> { /* imagen */ }
                    <Image src="/logo_proyectos.svg" width={240} height={240} alt="Logo de proyectos" className="scale-75 lg:scale-100" />
                </div>
            </div>

        </div>
    )
}