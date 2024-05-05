"use client";
import { useSession } from "next-auth/react"
import Image from "next/image.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";

// Componentes
import { DaPersonales, DaBio, DaSegundaColumna } from "./daPersonales.jsx";


// obtencion y guardado de los datos obtenidos de los campos
export default function ActualizarDatos(props){

    const { data: session } = useSession();
    const datosGet = props.datos;

    const router = useRouter();
    // variables de valor y modificacion
    let [ nombreReal, setNombreReal ] = useState("");    
    const [ edad, setEdad ] = useState("");
    const [ ubicacion, setUbicacion ] = useState("");
    const [ datosMongo, setDatosMongo ] = useState({});
    let encontrado;

    // controlo que se actualicen los datos antes de subir, para que no se suba un objeto vacio

    useEffect(()=>{
        let datos;
        let encon;
        if(session?.user){
            datos = datosGet.find(item => item.correo === session.user.email);
            encon = datosGet.some(item => item.correo === session.user.email);
            if(encon){
                setNombreReal(datos.nombre_real)
                setEdad(datos.edad);
                setUbicacion(datos.ubicacion)
            }
        }

    },[session?.user, datosGet])

    useEffect(()=>{
        if(session?.user){
            setDatosMongo({
                correo: session.user.email,
                nombre_real: nombreReal,
                edad: edad,
                ubicacion: ubicacion
            })
        }
    },[edad, nombreReal, ubicacion])


    // Esta funcion sube los datos a mongo
    const prueba = async(e)=>{
        e.preventDefault();
        
        encontrado = datosGet.some(item => item.correo === session.user.email);
        
        // Crear o Actualizar
        if(!encontrado){ // si coincide el correo actual con uno de mongo, no se crea el registro
            // crear 
            const subir = await fetch(`/api/datosPerfil/as`, {
                method: "POST",
                body: JSON.stringify(datosMongo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            router.refresh();
        } else {
            // actualizar
            encontrado = datosGet.find( item => item.correo === session.user.email);
            const idEncontrada = encontrado._id;

            if(encontrado){
                const actualizar = await fetch(`/api/datosPerfil/${idEncontrada}`, 
                {
                    method: "PUT",
                    body: JSON.stringify(datosMongo),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }

        }    
    }

    // obtengo los cambios y modifico la variable base para ser subida luego
    const get_nombre_real = (e)=>{setNombreReal(e.target.value)}
    const get_edad = (e)=>{setEdad(e.target.value)}
    const get_ubicacion = (e)=>{setUbicacion(e.target.value)}



    return(
        <form onSubmit={prueba} className="flex flex-col md:flex md:flex-row">
            <div>

            {
                session?.user ?
                <div className="flex justify-center">
                <div className="w-fit cuadro py-6 px-10 flex flex-col justify-center items-center rounded-lg">
                    <Image className="rounded-full border-2 border-yellow-300" 
                    src={session.user.image} width={60} height={60} alt="foto de perfil" />
                    <div className="mt-4">

                    <p className="font-bold text-center text-md md:text-md amarillo">
                        {session.user.name}    
                    </p>
                    <p className=" text-center text-neutral-500 text-xs scale-100 mt-2">
                        {session.user.email}    
                    </p>
                    </div>
                </div>

                </div>
                :
                <div>
                    <p>No esta registrado</p>
                </div>
            }
            <DaPersonales 
                nombre_real={get_nombre_real} valor_nombre_real={nombreReal}
                edad={get_edad} valor_edad={edad}
                ubicacion={get_ubicacion} valor_ubicacion={ubicacion}
            
            />
  
            <div className="hidden md:block">
                <button className="amarilloBack px-4 py-2 text-black font-bold rounded-full w-full">Guardar cambios</button>
            </div>
            </div>
            <div >
                <DaBio/>
                <DaSegundaColumna/>
            </div>
            <div className="md:hidden mb-20 flex justify-center">
                <button onSubmit={prueba} className="amarilloBack px-4 py-2 text-black font-bold rounded-full w-72">Guardar cambios</button>
            </div>
        </form>
    )
}