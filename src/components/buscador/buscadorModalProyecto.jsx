import { useState } from "react";

export default async function BuscadorModalProyecto(props){

    const usuarios = props.usuarios;
    const [ buscador, setBuscador ] = useState([]);
    const [ integranteBool, setIntegranteBool ] = useState(false);

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
            <div className="w-full mt-5 p-2 flex flex-wrap space-x-4 h-40 bg-slate-400 overflow-auto rounded-lg">
                
                
                {
                    integranteBool &&
                    buscador.map((valor, index)=> (
                        <div key={index} className="bg-slate-500 w-fit h-fit p-1 px-3 rounded-full mb-3">
                    <div className="relative">
                        <div className="absolute mt-[-13px] ml-[-17px] h-5 w-5 bg-red-400 rounded-full text-center">
                            <span className="text-sm font-bold absolute ml-[-4px]">x</span>
                        </div>
                    </div>
                    <span className="text-sm">
                        {valor.nombre}
                    </span>
                </div>
                    ))
                }
                

            </div>
        </div>
    )
}