"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function SignIn(){

  const { data: session } = useSession();

  if(session?.user){

  }


  return(
    <div className="flex justify-center w-screen h-screen">
       <button onClick={() => signIn("google",{callbackUrl:"/pages/0/3/inicio"})}>
            <p className="border rounded-md boder-2 border-yellow-300 p-2 px-4 hover:bg-yellow-300 hover:text-black transition">Ingresar con Google</p>
          </button>
    </div>
  )
}