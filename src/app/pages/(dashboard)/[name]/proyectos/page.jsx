import Image from "next/image"
import ModalCrearProyecto from "../../../../../components/modalCrearProyecto/modalCrearProyecto";
import { TiFolderOpen } from "react-icons/ti";
import Link from "next/link";

export default function Proyectos(){

    return(
        <div className="flex lg:flex lg:flex-col items-center w-full justify-center">
            <div className="flex flex-col-reverse lg:flex lg:flex-row cuadro w-[350px] lg:w-[500px] xl:w-[650px] h-[300px] rounded-lg p-2 py-3 lg:py-2"> { /* Boton crear */ }
                <div className="lg:w-fit flex flex-col justify-center space-y-1 lg:space-y-7 items-center pb-3">
                    <ModalCrearProyecto/> 
                    <Link href="./proyectos/ver_mis_proyectos" className="flex justify-center amarilloBack shadow-md w-[250px]  h-fit font-bold text-black text-center p-2 rounded-full mt-5 mb-4 lg:mb-0 lg:mt-0 lg:ml-5 cursor-pointer">
                        <TiFolderOpen className="mt-1 scale-125 z-10"/>
                        <span className="ml-2">
                            Ver mis proyectos
                        </span>
                    </Link>
                </div>
                <div className="flex justify-center w-full"> { /* imagen */ }
                    <Image src="/logo_proyectos.svg" width={240} height={240} alt="Logo de proyectos" className="scale-75 lg:scale-100" />
                </div>
            </div>
            
        </div>
    )
}