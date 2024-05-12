"use client";
import { useState } from "react";
import Image from "next/image";

export default function BuscadorModalProyecto(props){

    const usuarios = props.usuarios;
    const [ buscador, setBuscador ] = useState([]);
    const [ integranteBool, setIntegranteBool ] = useState(false);
    const [ pestaña, setPestaña ] = useState(true); 
    
    const cambiarPestaña = ()=>{pestaña && setPestaña(false)}
    const cambiarPestañaDos = ()=>{!pestaña && setPestaña(true)}

    const obtenerNombre = (e)=>{
        e.preventDefault();
        const valor = e.target.value;

        
        setBuscador( usuarios.filter((nombre)=> 
            nombre.nombre.toLowerCase().includes(valor.toLowerCase())));
        valor.length >= 1 ? setIntegranteBool(true) : setIntegranteBool(false);
    }

    return(
        <div className="w-full">

            {/* Crear el buscador de integrantes aqui */}

            <input onChange={obtenerNombre} type="search" placeholder="Agregar integrantes..." 
                className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full mt-5"/>
                
            <div className="flex space-x-7 mt-5 ml-1 bg-slate-400 w-fit px-4 text-neutral-800 text-sm rounded-t-lg py-1">
                <p onClick={cambiarPestañaDos} className="cursor-pointer">Usuarios (15)</p>
                <p className="text-slate-600">|</p>
                <p onClick={cambiarPestaña} className="cursor-pointer">Integrantes (0)</p>
            </div>
            <div className="border-collapse w-full p-2 flex flex-wrap space-x-4 h-40 bg-slate-400 overflow-auto rounded-lg">
                
                {
                    pestaña ?
                    <table className="border-collapse w-full h-fit text-neutral-800">

                        <thead className="text-sm">
                            <tr>
                            <th class="border border-neutral-800 px-1">Foto</th>
                            <th class="border border-neutral-800">Nombre</th>
                            <th class="border border-neutral-800 ">Correo</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs lg:text-sm">
                            {
                                integranteBool &&
                                buscador.map((e, index)=> (
                                <tr key={index} className="cursor-pointer hover:bg-slate-300 transition">
                                <td class="border border-neutral-800 w-5 pl-3 pb-2">
                                    <Image key={index} src={e.imagen} 
                                    className="text-xs mt-2 rounded-full" 
                                    width={20} height={20} alt="asd" />
                                </td>
                                <td class="border border-neutral-800 px-2">
                                    {e.nombre}
                                </td>
                                <td class="border border-neutral-800 px-2">
                                    {e.correo}
                                </td>
                                </tr>

                                ))
                            }
                        </tbody>
                    </table>

                   
                    :
                    <div>
                            asd
                    </div>

                }

            </div>
        </div>
    )
}