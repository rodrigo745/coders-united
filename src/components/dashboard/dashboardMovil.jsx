"use client";
import { IhuracanAmarillo } from "../../../public/iconos"
import { useState } from "react"
import Link from "next/link";
import { Icodigo, Ihuracan, Iproyecto, Iusuario, Iayuda, Iidea } from "../../../public/iconos";

export default function DashboardMovil(props){
    const ruta = props.ruta;

    const [ mostrar, setMostrar ] = useState(true);
    const mostrarMenu = ()=>{
        mostrar ? setMostrar(false) : setMostrar(true);
    }
    const titulos = [ "Inicio", "Proyectos", "Ideas", "Desarrolladores", "Perfil", "Ayuda"];
    const enlaces = [ "inicio", "proyectos", "ideas", "desarrolladores", "perfil", "ayuda"];
    const imagenes = [ Ihuracan, Iproyecto, Iidea, Icodigo,  Iusuario, Iayuda];
    return(
        <div className={`${mostrar ? "menuActivo" : "menuOff" }`}>
            <div className="mt-2 flex justify-between ">
                <div className="flex mb-2 cursor-pointer">
                    <div className="scale-50">
                        {IhuracanAmarillo}
                    </div>
                    <h2 className="mt-3 text-md font-bold amarillo">Coders United</h2>
                </div>
                <div className="mt-2 mr-4">
                    <div onClick={mostrarMenu}>
                        <p className="rotate-90 text-2xl cursor-pointer">
                        |||
                        </p>
                    </div>
                </div>
            </div>
            <div className="pl-4 transition">
            <div className="flex flex-col">
            {
                titulos.map((e, index)=> (
                    <Link key={index} href={`/pages/${index}/${enlaces[index]}`} className={`flex p-2 space-x-3 text-slate-600 ${ruta == index && "fondo liston"}`}>
                        <div className="scale-75 ml-4 mr-3">
                            {imagenes[index]}     
                        </div>
                        <span className={`${index == 2 || index == 0 ? "mt-2 text-sm" : "mt-1 text-sm" }`}>
                            {e}
                        </span>
                    </Link>
                ))
            }
            </div>
            </div>
        </div>
    )
}