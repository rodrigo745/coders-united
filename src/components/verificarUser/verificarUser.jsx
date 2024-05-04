"use client"
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export default function VerificarUser(props){
    
    const { data: session } = useSession();
    const datos = props.datos;

    useEffect(()=>{
        if(session?.user){
            let encontrado = false;
            encontrado = datos.some(item => item.nombre === session.user.name);
            if(!encontrado){
                const objetos = {
                    nombre: session.user.name,
                    correo: session.user.email,
                    imagen: session.user.image
                    
                }
                const subir = fetch("/api/usuarioGoogle/as", 
                {
                    method: "POST",
                    body: JSON.stringify(objetos),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

            }
        }
    },[session?.user, datos])


    
    return(
        <div>asdegg</div>
    )
}