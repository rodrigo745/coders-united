"use client";
import { useState } from "react";
import Image from "next/image";

export default function BuscadorModalProyecto(props){

    const usuarios = props.usuarios;
    const [ buscador, setBuscador ] = useState([]);
    const [ integranteBool, setIntegranteBool ] = useState(false);
    const [ pestaña, setPestaña ] = useState(true); 
    const [ integrantes, setIntegrantes ] = useState([]);
    const [ estiloSeleccion, setEstiloSeleccion ] = useState("");

    const cambiarPestaña = ()=>{pestaña && setPestaña(false)}
    const cambiarPestañaDos = ()=>{!pestaña && setPestaña(true)}

    const obtenerNombre = (e)=>{
        e.preventDefault();
        const valor = e.target.value;
        
        setBuscador( usuarios.filter((nombre)=> 
            nombre.nombre.toLowerCase().includes(valor.toLowerCase())));
        valor.length >= 1 ? setIntegranteBool(true) : setIntegranteBool(false);
    }
    const agregarIntegrante = (valor)=>{
        console.log(integrantes)
        setIntegrantes((guardado)=> { 
            const repetido = guardado.some((repetido)=> repetido.correo === valor.correo );

            console.log(repetido);
            if(repetido){
                return [...guardado];
            } else {
                return [...guardado, valor];
            }
        });
        const coincide = buscador.some((coincide)=> coincide.correo === integrantes.correo );

        if(coincide){
            setEstiloSeleccion("bg-green-200")
        }
    }

    const integranteMarcado = ()=>{
        
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
                                <tr onClick={()=> agregarIntegrante(e)} key={index} className={`cursor-pointer hover:bg-slate-300 transition ${estiloSeleccion}`}>
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
                    <div>
                            Aun no hay integrantes
                    </div>

                }
            </div>
            <div className="flex space-x-5 mt-4 ml-2">
                <div className="flex space-x-2 cursor-pointer">
                    <input defaultChecked className="w-4" name="proteccion" id="radio1" type="radio"/>
                    <label for="radio1" className="cursor-pointer">Público</label>
                </div>
                <div className="flex space-x-2 cursor-pointer">
                    <input className="w-4" name="proteccion" id="radio2" type="radio"/>
                    <label for="radio2" className="cursor-pointer">Privado</label>
                </div>
            </div>
        </div>
    )
}