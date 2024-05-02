"use client";
import { useSession } from "next-auth/react"

export default function Perfil(){

    const { data: session } = useSession();

    return(
        <div>
            {
                session?.user ?
                <div className="w-fit cuadro p-4 py-7 px-5 flex flex-col justify-center items-center rounded-lg">
                    <img className="rounded-full border-2 border-yellow-300" 
                    src={session.user.image} width={70} height={70} alt="foto de perfil" />
                    <div className="mt-4">

                    <p className="font-bold text-sm amarillo">
                        Usuario: 
                        <span className="font-light ml-2 text-white">{session.user.name}</span>    
                    </p>
                    <p className="font-bold text-sm amarillo mt-2">
                        Correo: 
                        <span className="font-light ml-2 text-white">{session.user.email}</span>    
                    </p>
                    </div>
                </div>
                :
                <div>
                    <p>No esta registrado</p>
                </div>
            }
        </div>
    )
}