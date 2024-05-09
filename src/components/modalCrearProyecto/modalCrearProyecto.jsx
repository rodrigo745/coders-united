"use client";
import { useState } from "react";
import { PiNotePencilBold } from "react-icons/pi";
import BuscadorModalProyecto from "../../components/buscador/buscadorModalProyecto";
import Link from "next/link";

export default function ModalCrearProyecto(){

    const [ mostrar, setMostrar ] = useState(false);

    const mostrarModal = ()=> {
        mostrar ? setMostrar(false) : setMostrar(true);
    }

    return(
        <div  className=" w-full justify-center  flex content-center items-center ">
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
                        <div className="modalContenido rounded-lg w-[350px] md:w-[400px] lg:w-[600px] z-50 p-4 h-fit pb-7">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <p className="text-xl ml-2 font-bold mt-2">Nuevo proyecto</p>
                                    <p onClick={mostrarModal} className="h-9 w-14 text-2xl text-center font-bold bg-red-400 rounded-lg cursor-pointer">x</p>
                                </div>
                                <div className="mt-6 text-md flex flex-col">
                                    <input className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full" placeholder="Nombre del proyecto" />

                                    <input className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full mt-5" placeholder="Campo adicional" />

                                    
                                    <BuscadorModalProyecto/>
                                    {/* Cambiar por una funcion que guarde el proyecto y redirija */}
                                    <Link href="./proyectos/proyecto_creado/as" className="w-full amarilloBack text-black font-bold text-center p-2 rounded-full mt-5 text-lg">Crear</Link>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div> 
    )
}