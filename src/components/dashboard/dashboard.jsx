"use client";
import Image from "next/image";
import Link from "next/link"
import "./dash.css";
import { Icodigo, Ihuracan, Iproyecto, Iusuario, Iayuda, Iidea, IhuracanAmarillo } from "../../../public/iconos";
import { BiHomeAlt2 , BiFolder, BiCodeAlt, BiUser,  BiHelpCircle, BiLogOut } from "react-icons/bi";

import { signOut } from "next-auth/react";

export default function Dashboard(props){

    const titulos = [ "Inicio", "Proyectos", "Ideas", "Desarrolladores", "Perfil", "Ayuda"];
    const enlaces = [ "inicio", "proyectos", "ideas", "desarrolladores", "perfil", "ayuda"];
    const imagenes = [ Ihuracan, Iproyecto, Iidea, Icodigo,  Iusuario, Iayuda];

    const ruta = props.ruta;

    return(
        <div className="ml-10  mt-4 h-[82vh] text-sm">
            <div className="flex mb-2 scale-100">
                <div className="scale-50">
                    {IhuracanAmarillo}
                </div>
                <h2 className="mt-3 text-lg font-bold amarillo">Coders United</h2>
            </div>
            <div className="flex flex-col h-full  cuadro rounded-3xl py-7 w-48 shadow-md shadow-neutral-900">
            {
                titulos.map((e, index)=> (
                    <Link key={index} href={`/pages/${index}/${enlaces[index]}`} className={`flex p-3 space-x-4 text-neutral-500 ${ruta == index && "fondo liston"}`}>
                        <div className="scale-75">
                            {imagenes[index]}     
                        </div>
                        <span className={`${index == 2 || index == 0 ? "mt-2" : "mt-1" }`}>
                            {e}
                        </span>
                    </Link>
                ))
            }
            <div className="text-neutral-500 text-center mt-3">
                <button onClick={async ()=> await signOut({callbackUrl:"/"})}>Cerrar sesión</button>
            </div>
            </div>
        </div>
    )
}
