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
    },[session?.user])
    console.log(params)
    return (
        <div className="flex flex-col md:flex md:flex-row w-full h-full">
            <div className="hidden md:block fixed">
                <div className="relative">
                    <Dashboard usuario={usuario.current}  ruta={params.name}/>

                </div>
            </div>
            <div className="block md:hidden">
                <DashboardMovil ruta={params.name}/>
            </div>
            <div className="md:p-10 md:py-20 mt-8 md:mt-0 md:ml-72">
                {children}
            </div>
        </div>
    );
}