"use client";
// componentes
import Dashboard from "../../../../../components/dashboard/dashboard";
import DashboardMovil from "../../../../../components/dashboard/dashboardMovil";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRef } from "react";

export default function RootLayout({ children, params}) {

    const { data: session } = useSession();
    let usuario = useRef();
    useEffect(()=>{
        usuario.current = session?.user.email;
        console.log(usuario.current);
        
        const reemplazo = {
            "a": "0", "b": "1", "c": "2", "d": "3", "e": "4", 
            "f": "5", "g": "6", "h": "7", "i": "8", "j": "9", 
            "k": "a", "l": "b", "m": "c", "n": "d", "ñ": "e", 
            "o": "f", "p": "g", "q": "h", "r": "i", "s": "j", 
            "t": "k", "u": "l", "v": "m", "w": "n", "x": "ñ", 
            "y": "o", "z": "p", ".": "_", "@": "-"
        };
        
        if (session?.user) {
            usuario.current = usuario.current.replace(/[aeioubcdfghjklmnñpqrstuvwxyz.@]/g, match => reemplazo[match]);
        }
    },[session?.user])

    

    return (
        <div className="flex flex-col md:flex md:flex-row w-full h-full">
            <div className="hidden md:block fixed">
                <div className="relative">
                    <Dashboard usuario={usuario.current}  ruta={params.name}/>

                </div>
            </div>
            <div className="block md:hidden">
                <DashboardMovil usuario={usuario.current} ruta={params.name}/>
            </div>
            <div className="md:p-10 md:py-20 mt-8 md:mt-0 md:ml-72">
                {children}
            </div>
        </div>
    );
}