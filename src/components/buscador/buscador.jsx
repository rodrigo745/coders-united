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
            // hacer el algoritmo de busqueda aqui
            // Filtrar los nombres que coinciden con "Rodrigo"
            const nombres = datosDB.filter(nombre => nombre.nombre.toLowerCase().includes(textoCambiante.toLowerCase()));
            
            // Ordenar alfabéticamente los nombres de los Rodrigos
            const nombresOrdenados = nombres.sort((a,b)=> {
                const nomA = a.nombre.toLowerCase();
                const nomB = b.nombre.toLowerCase();
                return nomA.localeCompare(nomB)
            });
            
            // // Mostrar solo los primeros 5 nombres de Rodrigos
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
                                        className="block"> {e.nombre} </Link>
                                    ))
                             }
                         </div>
                    
                                }
                </div>
                

            </div>
        </div>
    )
}