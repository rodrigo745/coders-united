"use client";
import { useSession } from "next-auth/react";

export default function InfoGeneral(props){

    const datos = props.datos;
    const { data: session } = useSession();

    // Fecha
    const fecha = new Date(datos.inicio_proyecto);
    const year = fecha.getFullYear();
    const dia = ("0" + (fecha.getDate() + 1)).slice(-2);
    const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    const fechaCompleta = (`${dia} / ${mes} / ${year}`)



    return(
        <div className="cuadro w-[90vw] lg:w-[60vw] h-[600px] lg:h-[300px] rounded-lg shadow-md p-4">
             <h2 className="rounded-r-full border-l-8 border-yellow-200 min-w-24 w-fit px-3 pr-5 fondo shadow-sm p-2">{datos.titulo}</h2>
                    <div className="flex flex-col lg:flex lg:flex-row">
                        <div className="mt-4 ml-2">
                            <p className="font-bold amarillo"> Usuario:
                                <span className="text-white font-normal pl-2"> 
                                {
                                    session?.user &&
                                    <span>{session.user.name}</span>
                                }
                                </span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Nivel:
                                <span className="text-white font-normal pl-2"> 
                                    {
                                        session?.user &&
                                            session.user.email === datos.integrantes[0].correo ?
                                                <span>Administrador</span>
                                            :
                                            <span>Sin definir</span>
                                    }
                                </span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Estado del proyecto:
                                <span className="text-white font-normal pl-2">
                                    {
                                        datos.estado
                                    }
                                </span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Fecha de inicio:
                                <span className="text-white font-normal pl-2">
                                   {
                                    fechaCompleta
                                   }
                                </span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Tipo:
                                <span className="text-white font-normal p-2">
                                    {
                                        datos.proteccion == false ? "Público" : "Privado"
                                    }
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[60%] h-56 ml-20">
                            <p className="text-6xl font-bold rotate-12">Gráficos</p>
                        </div>
                        </div>
        </div>
    )
}