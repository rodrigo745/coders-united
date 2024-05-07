import { GET } from "../../../../../api/datosPerfil/[id]/route"
import Image from "next/image";

export default async function IdUsuario({params}){

    const datosDB = await GET();
    
    // obtengo el id y el numero de indexacion del usuario
    const correoReemplazo = params.id[1].replace("%40", "@")
    const filtro = datosDB.filter((correo)=> correo.correo  === correoReemplazo)
    
    return(
        <div className="w-full md:w-[60vw] lg:w-[80vw]  ml-1">
            <div className="w-full flex flex-col items-center lg:flex lg:flex-row lg:justify-between ">
                <div className="w-[310px] lg:w-[280px]  cuadro py-6  flex flex-col justify-center items-center rounded-lg">
                    <Image className="rounded-full border-2 border-yellow-300" 
                    src={filtro[0].imagen} width={60} height={60} alt="foto de perfil" />
                    <div className="mt-4">
                        <p className="font-bold text-center text-md md:text-md amarillo">
                        {filtro[0].nombre_google}</p>
                        <p className=" text-center text-neutral-500 text-xs scale-100 mt-2">
                        {filtro[0].correo}</p>
                    </div>
                </div>
                <div>
                    {/* Biografia */}
                    <div className="cuadro xl:basis-1/2 rounded-lg lg:py-2 mt-10 mb-10 lg:mb-0 lg:mt-0">
                        <div className="mt-10 lg:mt-0 mb-10 lg:mb-0  lg:w-[30vw] w-[310px] h-[160px] xl:w-[45vw] p-2 py-3 md:px-4 overflow-auto">
                            {
                                filtro[0].biografia ?
                                <p> {filtro[0].biografia} </p>
                                :
                                <p className=""> Sin biografía </p> 
                            }
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/4 xl:basis-1/6">
                    {/* Botones */}
                    {
                        filtro[0].biografia ?
                        <div>
                            <div className="w-[310px] lg:w-full amarilloBack font-bold text-black p-2 text-center rounded-full lg:mb-4 mb-6">
                                  Ver portafólio
                            </div>
                            <div className="w-[310px] lg:w-full amarilloBack font-bold text-black p-2 text-center rounded-full lg:mb-14">
                            Ver más usuarios
                        </div>
                        </div>
                        :
                        <div className="w-[310px] lg:w-full amarilloBack font-bold text-black p-2 text-center rounded-full lg:mb-28">
                            Ver más usuarios
                        </div>
                    }
                    
                </div>

            </div>


            <h3>Informacion del usuario</h3>
            <br />
            <p>Nombre: {filtro.nombre} </p>
            <br />
            <p>Correo: {filtro.correo} </p>
            <br />
            <p>¿Tiene Imagen?: {filtro.nombre ? "SI" : "No"} </p>
            <br />
            <br />
            <br />
            <br />
            <p>Modificar luego</p>
        </div>
    )
}