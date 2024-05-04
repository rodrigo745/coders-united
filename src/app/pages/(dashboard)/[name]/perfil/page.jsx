"use client";
import { useSession } from "next-auth/react"

export default function Perfil(){

    const { data: session } = useSession();

    return(
        <div className="">
            {
                session?.user ?
                <div className="w-full cuadro py-4 px-8 flex flex-col justify-center items-center rounded-lg">
                    <img className="rounded-full border-2 border-yellow-300" 
                    src={session.user.image} width={60} height={60} alt="foto de perfil" />
                    <div className="mt-4">

                    <p className="font-bold text-center text-xs md:text-sm amarillo">
                        {session.user.name}    
                    </p>
                    <p className=" text-center text-neutral-500 text-xs scale-100 mt-2">
                        {session.user.email}    
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