"use client";
import { useState } from "react";

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
            <div className="w-full p-2 flex flex-wrap space-x-4 h-40 bg-slate-400 overflow-auto rounded-lg">
                
                {
                    pestaña ?
                    <div className="w-full flex text-sm text-neutral-800">
                        <div className="flex flex-col w-14">
                            <p>Foto</p>

                        </div>
                        <div className="flex flex-col w-[40%]">
                            <p>Nombre</p>

                        </div>
                        <div className="flex flex-col w-[40%]">
                            <p>Correo</p>

                        </div>
                        
                    </div>
                    :
                    <div>
                            asd
                    </div>

                }

            </div>
        </div>
    )
}