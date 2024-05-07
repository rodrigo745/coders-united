import { GET } from "../../../../../api/datosPerfil/[id]/route"
import Image from "next/image";

export default async function IdUsuario({params}){

    const datosDB = await GET();
    
    // obtengo el id y el numero de indexacion del usuario
    const correoReemplazo = params.id[1].replace("%40", "@")
    const filtro = datosDB.filter((correo)=> correo.correo  === correoReemplazo)
    
    return(
        <div className="w-full ml-1">
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between ">
                <div className="w-[280px] cuadro py-6  flex flex-col justify-center items-center rounded-lg">
                    <Image className="rounded-full border-2 border-yellow-300" 
                    src={filtro[0].imagen} width={60} height={60} alt="foto de perfil" />
                    <div className="mt-4">

                    <p className="font-bold text-center text-md md:text-md amarillo">
                        {filtro[0].nombre_google}    
                    </p>
                    <p className=" text-center text-neutral-500 text-xs scale-100 mt-2">
                        {filtro[0].correo}    
                    </p>
                    </div>
                </div>
                <div>
                    {/* Biografia */}
                    B
                </div>
                <div>
                    {/* Botones */}
                    B
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