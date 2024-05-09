import Image from "next/image"
import { PiNotePencilBold } from "react-icons/pi";
import ModalCrearProyecto from "../../../../../components/modalCrearProyecto/modalCrearProyecto";


export default function Proyectos(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col-reverse lg:flex lg:flex-row  cuadro w-[350px] lg:w-[500px] xl:w-[650px] h-[300px] rounded-lg p-2 py-4 lg:py-2"> { /* Boton crear */ }
                <div className="h-full w-full justify-center  flex content-center items-center">
                    <p className="flex justify-center amarilloBack shadow-md w-[250px]  h-fit font-bold text-black text-center p-2 rounded-full mt-5 mb-4 lg:mb-0 lg:mt-0 lg:ml-5">
                        <PiNotePencilBold className="mt-1 scale-125"/>
                        <span className="ml-2">
                            Crear proyecto
                        </span>
                    </p>
                </div>  
                <div className="flex justify-center w-full"> { /* imagen */ }
                    <Image src="/logo_proyectos.svg" width={240} height={240} alt="Logo de proyectos" className="scale-75 lg:scale-100" />
                </div>
            </div>



            <ModalCrearProyecto/>

        </div>
    )
}