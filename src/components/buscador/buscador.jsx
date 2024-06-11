"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Buscador(props){

    const datosDB = props.datos;
    const [ textoCambiante, setTextoCambiante ] = useState("");
    const [ listaResultado, setListaResultados ] = useState([]);

    const cambioDeTexto = (e)=>{
        setTextoCambiante(e.target.value);
    }
    
    useEffect(()=>{
        
        if(textoCambiante != ""){
            const nombres = datosDB.filter(nombres => nombres.nombre_google.toLowerCase().includes(textoCambiante.toLowerCase()));

            // Ordenar alfabéticamente los nombres 
            const nombresOrdenados = nombres.sort((a,b)=> {
                const nomA = a.nombre_google.toLowerCase();
                const nomB = b.nombre_google.toLowerCase();
                return nomA.localeCompare(nomB)
            });
            
            // // Mostrar solo los primeros 5 nombres 
            const primerosCincoNombres = nombresOrdenados.slice(0, 5);

            if(primerosCincoNombres.length == 0){
                setListaResultados([{nombre:"No hay coincidencias"}])
            } else {
                setListaResultados(primerosCincoNombres);
            }
        }
    },[textoCambiante])


    return(
        <div>
            <div className="mb-3">
                <input  onChange={cambioDeTexto} type="search"className="p-2 px-5 border border-1 active:border-yellow-300 rounded-full cuadro w-[320px]" 
                placeholder="Buscar usuario"/>
                
                <div className="cuadro w-[320px]  h-fit absolute z-50 rounded-md ">
                    {                        
                        textoCambiante != "" &&
                        <div className="p-3 border rounded-lg shadow-md space-y-2"> 
                            {
                                listaResultado.map((e, index)=> (
                                    <Link href={`./usuarios/${e._id}/${e.correo}`} key={index}
                                        className="block"> {e.nombre_google} </Link>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}