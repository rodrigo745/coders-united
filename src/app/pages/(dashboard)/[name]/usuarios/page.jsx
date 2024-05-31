import Image from "next/image";
import { GET as DaPerfil } from "../../../../api/datosPerfil/[id]/route";
import { BiHelpCircle } from "react-icons/bi"
import { RxEyeOpen } from "react-icons/rx";
import Link from "next/link";
import Buscador from "../../../../../components/buscador/buscador";

export default async function Usuarios(){

    const datosBD = await DaPerfil();


    return(
        <div className="mb-10 lg:w-[65vw] xl:w-[73vw] 2xl:w-[77vw]">

            <div className="w-full flex flex-col lg:block items-center justify-center content-center">
                <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between mb-3 justify-center  items-center md:ml-4">
                    <div className="flex">
                        <h2 className="text-lg mt-2 mb-4 md:mb-0">Usuarios sin identificar</h2>
                        <BiHelpCircle color="#CDD589" className="scale-150 ml-4 mt-4 mr-2"/>
                    </div>
                    <Buscador datos={datosBD}/>
                </div>
                <div className="grid xl:gap-x-12 2xl:gap-x-16 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-fit">
                {
                    datosBD.map((e, index)=> ( 
                        (e.rama == undefined || e.rama === "Otro") &&
                        <Link href={`./usuarios/${e._id}/${e.correo}`} key={index} className="cuadro h-fit p-2 rounded-full flex w-[330px] mb-4 cursor-pointer">

                            <Image src={e.imagen} width={30} height={30} alt="imagen" className="rounded-full border-2 border-yellow-300 ml-1 h-fit" />
                            <div className="flex justify-between h-fit w-full">
                                <p className="text-sm ml-4 mt-1 h-fit">{e.nombre_google}</p>
                                <RxEyeOpen color="#CDD589" className="scale-150 mt-2 mr-3 h-fit"/>
                            </div>
                        </Link>
                    ))
                }
                <div className=" amarilloBack rounded-full h-11 w-[320px] cursor-pointer">
                    <p className="text-black font-bold text-center mt-3">Ver más usuarios</p>
                </div>
                </div>
            { datosBD.some((item)=> item.rama === "Desarrollo" ) && Lista("Desarrolladores", "Desarrollo")}
            { datosBD.some((item)=> item.rama === "Diseño" ) && Lista("Diseñadores", "Diseño")}
            { datosBD.some((item)=> item.rama === "Marketing" ) && Lista("Marketing", "Marketing")}
            </div>


            
        </div>
    )


    function Lista(titulo, filtro){
        return(
            <div className="w-full flex flex-col lg:block items-center justify-center content-center">
                <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between mb-3 justify-center  items-center md:ml-4">
                    <div className="flex">
                        <h2 className="text-lg mt-2 mb-4 md:mb-0">{titulo}</h2>
                        <BiHelpCircle color="#CDD589" className="scale-150 ml-4 mt-4 mr-2"/>
                    </div>
                </div>
                <div className="grid xl:gap-x-12 2xl:gap-x-16 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-fit">
                {
                    datosBD.map((e, index)=> ( 
                        e.rama == filtro &&
                        <Link href={`./usuarios/${e._id}/${e.correo}`} key={index} className="cuadro h-fit p-2 rounded-full flex w-[330px] mb-4 cursor-pointer">

                            <Image src={e.imagen} width={30} height={30} alt="imagen" className="rounded-full border-2 border-yellow-300 ml-1 h-fit" />
                            <div className="flex justify-between h-fit w-full">
                                <p className="text-sm ml-4 mt-1 h-fit">{e.nombre_google}</p>
                                <RxEyeOpen color="#CDD589" className="scale-150 mt-2 mr-3 h-fit"/>
                            </div>
                        </Link>
                    ))
                }
                <div className=" amarilloBack rounded-full h-11 w-[320px] cursor-pointer">
                    <p className="text-black font-bold text-center mt-3">Ver más usuarios</p>
                </div>
                </div>
            </div>
        )
    }


}