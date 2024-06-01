"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function BuscadorModalProyecto(props){

    const usuarios = props.usuarios;
    const { data: session } = useSession();
    const [ buscador, setBuscador ] = useState([]);
    const [ integranteBool, setIntegranteBool ] = useState(false);
    const [ pestaña, setPestaña ] = useState(true); 
    const [ integrantes, setIntegrantes ] = useState([]);

    const cambiarPestaña = ()=>{pestaña && setPestaña(false)}
    const cambiarPestañaDos = ()=>{!pestaña && setPestaña(true)}
    
    useEffect(()=>{
        if(session?.user){
            const usuarioLider = {    
                nombre: session.user.name,
                correo: session.user.email,
                imagen: session.user.image
            }
            setIntegrantes([usuarioLider]);
            props.obtener_integrante([usuarioLider]);
        }
    },[session?.user])
    


    const obtenerNombre = (e)=>{
        e.preventDefault();
        const valor = e.target.value;
        
        setBuscador( usuarios.filter((nombre)=> 
            nombre.nombre.toLowerCase().includes(valor.toLowerCase())));
            valor.length >= 1 ? setIntegranteBool(true) : setIntegranteBool(false);        
    }

    const agregarIntegrante = (valor)=>{
        // Enviar esto a la base de datos
        setIntegrantes((guardado)=> { 
            const repetido = guardado.some((repetido)=> repetido.correo === valor.correo );
            
            if(repetido){
                props.obtener_integrante([...integrantes]);
                return [...guardado];
            } else {
                props.obtener_integrante([...integrantes, valor]);
                return [...guardado, valor];
            }
        });
    }

    const eliminarIntegrante = (e)=>{

        setIntegrantes((lista)=> {
            const eliminado = e.target.id;
            // Enviar esto a la base de datos
            return lista.filter((correo)=> correo.correo !== eliminado )
        } );
    }

    return(
        <div className="w-full">

            {/* Crear el buscador de integrantes aqui */}

            <input onChange={obtenerNombre} type="search" placeholder="Agregar integrantes..." 
                className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full mt-5"/>
                
            <div className="flex space-x-7 mt-5 ml-1 bg-slate-400 w-fit px-4 text-neutral-800 text-sm rounded-t-lg py-1">
                <p onClick={cambiarPestañaDos} className="cursor-pointer">Usuarios ( {buscador.length} )</p>
                <p className="text-slate-600">|</p>
                <p onClick={cambiarPestaña} className="cursor-pointer">Integrantes ( {integrantes != undefined ? integrantes.length : "0"} )</p>
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
                                <tr onClick={()=> agregarIntegrante(e)} key={index} className={`cursor-pointer transition ${
                                    integrantes.some((coincide)=> coincide.correo === e.correo ) ? "bg-green-800 text-white hover:bg-green-800 cursor-default" : "hover:bg-slate-300 "
                                }`}>
                                <td class="border  border-neutral-800 w-5 pl-2 pb-1">
                                    <Image key={index} src={e.imagen} 
                                    className="text-xs mt-2 rounded-full" 
                                    width={25} height={25} alt="asd" />
                                </td>
                                <td class="border border-neutral-800 px-2 min-w-40">
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
                    <div className="w-full">
                            {
                                integrantes.length == 0 ?
                                <p className="text-neutral-800 text-sm">Aún no hay integrantes</p>
                                :
                                <table className="border-collapse w-full h-fit text-neutral-800">

                                <thead className="text-sm">
                                    <tr>
                                    <th class="border border-neutral-800 px-1">Foto</th>
                                    <th class="border border-neutral-800">Nombre</th>
                                    <th class="border border-neutral-800 "></th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs lg:text-sm" >
                                    {
                                        session?.user &&
                                        integrantes.map((e, index)=> (
                                        <tr key={index} className="transition cursor-default">
                                        <td class="border  border-neutral-800 w-5 pl-2 pb-1">
                                            <Image key={index} src={e.imagen} 
                                            className="text-xs mt-2 rounded-full" 
                                            width={25} height={25} alt="asd" />
                                        </td>
                                        <td class="border border-neutral-800 px-2 min-w-40">
                                            {e.nombre}
                                        </td>
                                        <td class="border border-neutral-800 w-28">
                                            {
                                                e.correo !== session.user.email &&
                                                <button onClick={eliminarIntegrante} id={e.correo} className="p-2  text-red-600 font-bold w-full rounded-lg text-xs lg:text-sm">Eliminar</button>
                                            }
                                        </td>
                                        </tr>
        
                                        ))
                                    }
                                </tbody>
                            </table>
                            }
                    </div>

                }
            </div>
            
        </div>
    )
}