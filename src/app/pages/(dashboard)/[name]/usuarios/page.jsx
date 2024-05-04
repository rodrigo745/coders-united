import Image from "next/image";
import { GET } from "../../../../api/usuarioGoogle/[id]/route"
import { BiHelpCircle } from "react-icons/bi"
import { RxEyeOpen } from "react-icons/rx";

export default async function Usuarios(){

    const datosBD = await GET();


    return(
        <div className=" lg:w-[65vw] xl:w-[73vw] 2xl:w-[77vw]">

            <div className="w-full flex flex-col lg:block items-center justify-center content-center">
                <div className="flex mb-3 ml-4">
                    <h2 className="text-lg">Usuario sin identificar</h2>
                    <BiHelpCircle color="#CDD589" className="scale-150 ml-20 mt-2"/>
                </div>
                <div className="grid gap-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    datosBD.map((e, index)=> (
                        <div key={index} className="cuadro p-2 rounded-full flex w-[320px] mb-4 cursor-pointer">

                            <Image src={e.imagen} width={30} height={30} alt="imagen" className="rounded-full border-2 border-yellow-300 ml-1" />
                            <div className="flex justify-between w-full">
                                <p className="text-sm ml-4 mt-1">{e.nombre}</p>
                                <RxEyeOpen color="#CDD589" className="scale-150 mt-2 mr-3"/>
                            </div>
                        </div>
                    ))
                }
                <div className=" amarilloBack rounded-full h-11 w-[320px] cursor-pointer">
                    <p className="text-black font-bold text-center mt-2">Ver más usuarios</p>
                </div>
                </div>
            </div>
        </div>
    )
}