"use client"
import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerificarUser(props){
    
    const { data: session } = useSession();
    const datos = props.datos;
    const router = useRouter();

    // Verifico si el usuario actual ya esta registrado, si no lo esta se registra 
    useEffect(()=>{
        if(session?.user){
            let encontrado = false;
            encontrado = datos.some(item => item.correo === session.user.email);
            if(!encontrado){
                const objetosGoogle = {
                    nombre: session.user.name,
                    correo: session.user.email,
                    imagen: session.user.image
                    
                }
                const subir = fetch("/api/usuarioGoogle/as", 
                {
                    method: "POST",
                    body: JSON.stringify(objetosGoogle),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const objetosBase = {
                    nombre_google: session.user.name,
                    correo: session.user.email,
                    imagen: session.user.image
                }
                const subirBase = fetch("/api/datosPerfil/as", 
                {
                    method: "POST",
                    body: JSON.stringify(objetosBase),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                router.refresh();
            }
        }
    },[session?.user, datos])
    
    return(
        <></>
    )
}