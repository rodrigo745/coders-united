"use client";
import { useSession } from "next-auth/react"

// Componentes
import { DaPersonales } from "../../../../../components/datosPersonales/daPersonales.jsx";
import Dashboard from "../../../../../components/dashboard/dashboard";

export default function Perfil(){

    const { data: session } = useSession();

    return(
        <div className="flex flex-col md:flex md:flex-row">
            <div>

            {
                session?.user ?
                <div className="flex justify-center">
                <div className="w-fit cuadro py-6 px-10 flex flex-col justify-center items-center rounded-lg">
                    <img className="rounded-full border-2 border-yellow-300" 
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
            <DaPersonales/>
            </div>
            <div>
                asd
            </div>
        </div>
    )
}