
import Link from "next/link"
import "./dash.css";
import { IhuracanAmarillo } from "../../../public/iconos";
import { BiHomeAlt2 , BiFolder, BiCodeAlt, BiUser,  BiHelpCircle, BiLogOut } from "react-icons/bi";
import { PiCubeFocusLight } from "react-icons/pi";
import { signOut } from "next-auth/react";


export default function Dashboard(props, {params}){

    const titulos = [ "Inicio", "Proyectos", "Ideas", "Usuarios", "Perfil", "Ayuda"];
    const enlaces = [ "inicio", "proyectos", "ideas", "usuarios", "perfil", "ayuda"];
    const imagenes = [ <BiHomeAlt2 key="home"/>, <BiFolder key="Folder"/>,<PiCubeFocusLight key="FocusLight"/>, <BiCodeAlt key="CodeAlt"/>, <BiUser key="User"/>,  <BiHelpCircle key="HelpCircle"/>, <BiCodeAlt key="CodeAlt"/>];
    const ruta = props.ruta;

    return(
        <div className="ml-10  mt-6 h-[85vh] text-sm">
            <div className="flex mb-2 scale-100">
                <div className="ml-5 scale-50">
                    {IhuracanAmarillo}
                </div>
                <h2 className="mt-3 text-lg font-bold amarillo">Coders United</h2>
            </div>
            <div className="flex flex-col h-full  cuadro rounded-3xl py-7 w-56 shadow-md shadow-neutral-900">
            {
                titulos.map((e, index)=> (
                    <Link key={index} href={`/pages/${index}/${props.usuario}/${enlaces[index]}`} className={`flex p-3 space-x-4 text-neutral-500 ${ruta == index && "fondo liston"}`}>
                        <div className="scale-125 mt-2 ml-2">
                            {imagenes[index]}     
                        </div>
                        <span className={`${index == 2 || index == 0 ? "mt-1" : "mt-1" }`}>
                            {e}
                        </span>
                    </Link>
                ))
            }
            <div className="text-neutral-500 ml-5 mt-4">
                <button className="flex" onClick={async ()=> await signOut({callbackUrl:"/"})}>
                    <BiLogOut className="scale-150 mr-5"/> Cerrar sesión
                </button>
            </div>
            </div>
        </div>
    )
}
