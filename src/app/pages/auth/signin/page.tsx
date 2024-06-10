"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

// Componentes
import LoginGeneral from "../../../../components/login/general/general";

export default function SignIn(){

  const { data: session } = useSession();

  const btnGoogle = <button onClick={() => signIn("google",{callbackUrl:"/pages/0/3/inicio"})} className="w-full mt-4">
  <p className="border rounded-full boder-2 border-[#CDD589] p-3 hover:bg-[#CDD589] font-bold text-lg hover:text-black transition">Ingresar con Google</p>
</button> 

  return(
    <div className="flex justify-center items-center w-screen h-screen">
      <LoginGeneral botonGoogle={btnGoogle}/>
       
    </div>
  )
}