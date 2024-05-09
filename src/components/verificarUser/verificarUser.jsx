"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerificarUser(props){
    
    const { data: session } = useSession();
    const datosGoogle = props.datosGoogle;
    const datosPerfil = props.datosPerfil;
    const router = useRouter();


    // Verifico si el usuario actual ya esta registrado, si no lo esta se registra 
    useEffect(()=>{
        if(session?.user){
            let encontrado = false;
            encontrado = datosGoogle.some(item => item.correo === session.user.email);
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
    },[session?.user, datosGoogle])

    // Funcion de eliminacion de registros repetidos
    useEffect(()=>{
        // encuantro los registros repetidos y los guardo en un array
        const usuarioRepetido = datosGoogle.filter((a, index, array)=> {
            return (
                array.findIndex( (b)=> b.correo === a.correo && b.nombre === a.nombre ) !== index
            )
        } )

        // elimino los registros repetidos
        usuarioRepetido.forEach((e)=> {
            return(
                fetch(`/api/usuarioGoogle/${e._id}`,{
                    method: "DELETE"
                })
            )
        } )
        
        // junto los registros de perfil repetidos
        const perfilRepetido = datosPerfil.filter((a, index, array)=> {
            return (
                array.findIndex((b)=> b.correo === a.correo && b.nombre_google === a.nombre_google ) !== index 
            )
        } )
        // elimino los registros
        perfilRepetido.forEach((e)=> {
            return(
                fetch(`/api/datosPerfil/${e._id}`, {
                    method: "DELETE"
                })
            )
        } )
    },[])




    return(
        <></>
    )
}