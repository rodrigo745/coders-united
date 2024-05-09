"use client";
import { useState } from "react";
import { PiNotePencilBold } from "react-icons/pi";

export default function ModalCrearProyecto(){

    const [ mostrar, setMostrar ] = useState(false);

    const mostrarModal = ()=> {
        mostrar ? setMostrar(false) : setMostrar(true);
    }

    return(
        <div  className="h-full w-full justify-center  flex content-center items-center ">
            <p onClick={mostrarModal} className="flex justify-center amarilloBack shadow-md w-[250px]  h-fit font-bold text-black text-center p-2 rounded-full mt-5 mb-4 lg:mb-0 lg:mt-0 lg:ml-5 cursor-pointer">
                <PiNotePencilBold className="mt-1 scale-125 z-10"/>
                <span className="ml-2">
                    Crear proyecto
                </span>
            </p>
            {/* Modal */}
            {
                mostrar && 
                    <div  className="modalContenedor z-30">
                        <div onClick={mostrarModal} className="w-screen h-screen"></div>
                        <div className="modalContenido rounded-lg w-[350px] md:w-[400px] lg:w-[600px] z-50">
                            contenido
                        </div>
                    </div>
            }
        </div> 
    )
}