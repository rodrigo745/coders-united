import { TableroHerramientas } from "../../../../../../components/datosPersonales/daPersonales";
import { GET } from "../../../../../api/datosPerfil/[id]/route"
import Image from "next/image";

export default async function IdUsuario({params}){

    const datosDB = await GET();
    
    // obtengo el id y el numero de indexacion del usuario
    const correoReemplazo = params.id[1].replace("%40", "@")
    const filtro = datosDB.filter((correo)=> correo.correo  === correoReemplazo)
    
    return(
        <div className=" ml-1">
            {/* primera fila */}
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
                <div className="lg:ml-10 lg:mr-10">
                    {/* Biografia */}
                    <div className="cuadro xl:basis-1/2 rounded-lg lg:py-2 mt-10 mb-10 lg:mb-0 lg:mt-0">
                        <div className="mt-10 text-sm lg:mt-0 mb-10 lg:mb-0  lg:w-[30vw] w-[310px] h-[160px] xl:w-[45vw] p-2 py-3 md:px-4 overflow-auto">
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
                        filtro[0].portafolio ?
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
            {/* Segunda fila */}
            <div className=" mt-10 flex flex-col items-center lg:flex lg:flex-row lg:justify-between w-full md:w-[60vw] lg:w-[75vw]">
                    <div>
                        <h4>Datos personales</h4>
                        <div className="overflow-auto rounded-lg p-3 cuadro w-[310px] lg:w-[330px] h-[160px] text-sm mt-3 space-y-5 py-4">
                            <p className="amarillo font-bold">Nombre real: 
                                <span className="text-white font-light ml-1">
                                    { (filtro[0].nombre_real && filtro[0].nombre_real !== "" ) ? filtro[0].nombre_real : "Sin datos"  }
                                </span>
                            </p>
                            <p className="amarillo font-bold">Edad: 
                                <span className="text-white font-light ml-1"> 
                                    {(filtro[0].edad && filtro[0].edad !== "" ) ? filtro[0].edad : "Sin datos" } 
                                </span>    
                            </p>
                            <p className="amarillo font-bold">Ubicación:
                                <span className="text-white font-light ml-1"> 
                                    {(filtro[0].ubicacion && filtro[0].ubicacion !== "" ) ? filtro[0].ubicacion : "Sin datos" } 
                                </span>    
                            </p>
                        </div>
                    </div>
                    <div className="w-[310px] lg:w-[430px] lg:ml-12 mt-10 lg:mt-0">
                        <h4>Actividad</h4>
                        <div className="h-40 mt-2 cuadro rounded-lg p-2 space-y-3 pt-3 pr-4 overflow-auto text-sm">
                            <p className="amarillo font-bold flex justify-between">Proyectos en los que trabajó:
                                <span className="text-white font-light ml-1"> 
                                    Sin datos 
                                </span>    
                            </p>
                            <p className="amarillo font-bold flex justify-between">Proyectos terminados:
                                <span className="text-white font-light ml-1"> 
                                    Sin datos
                                </span>    
                            </p>
                            <p className="amarillo font-bold flex justify-between">Ideas aportadas:
                                <span className="text-white font-light ml-1"> 
                                    Sin datos
                                </span>    
                            </p>
                            <p className="amarillo font-bold flex justify-between">Compañeros con los que trabajó:
                                <span className="text-white font-light ml-1"> 
                                    Sin datos
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className=" w-[310px] lg:w-[580px] lg:ml-12 mt-10 lg:mt-0">
                        <h4>Tableto de habilidades</h4>
                        <div className="h-40 mt-2 cuadro rounded-lg p-2 flex flex-wrap space-x-4 overflow-auto">
                            {
                                filtro[0] &&
                                filtro[0].herramientas.map((e, index)=> (
                                    <div key={index} className="block mb-2 cursor-pointer">
                                        <div className="pt-2">
                                            <div className="amarilloBack rounded-md px-2 py-1 w-fit text-black font-bold">
                                                <p>{e}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) ) 
                            }
                        </div>
                    </div>
            </div>
            {/* Tercera fila */}
            <div className=" mt-10 flex flex-col items-center lg:flex lg:flex-row lg:justify-start w-full md:w-[60vw] lg:w-[75vw] lg:space-x-14">
                    <div>
                        <h4>Datos personales</h4>
                        <div className="overflow-auto rounded-lg p-3 cuadro w-[310px] lg:w-[330px] h-[160px] text-sm mt-3 space-y-5 py-4">
                            <p className="amarillo font-bold">Rama: 
                                <span className="text-white font-light ml-1 ">
                                    { (filtro[0].rama && filtro[0].rama !== "" ) ? filtro[0].rama : "Sin datos"  }
                                </span>
                            </p>
                            <p className="amarillo font-bold">Puesto: 
                                <span className="text-white font-light ml-1 "> 
                                    {(filtro[0].puesto && filtro[0].puesto !== "" ) ? filtro[0].puesto : "Sin datos"  } 
                                </span>    
                            </p>
                            <p className="amarillo font-bold">Disponibilidad:
                                <span className="text-white font-light ml-1 "> 
                                    {(filtro[0].disponibilidad && filtro[0].disponibilidad !== "" ) ? filtro[0].disponibilidad : "Sin datos"  } 
                                </span>    
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-10 lg:mt-0">
                        <h4>Contacto</h4>
                        <div className="cuadro p-2 rounded-full w-[310px] lg:w-[330px] mb-4 mt-4">
                            <p className="font-bold amarillo text-sm p-1 px-4"> Teléfono:
                                <span className="font-light text-white ml-2"> 
                                    { filtro[0].telefono && filtro[0].telefono !== "" ? filtro[0].telefono : "Sin datos" }
                                </span>
                            </p>
                        </div>
                        <div className="amarilloBack p-2 rounded-full text-black w-[310px] lg:w-[330px] text-center font-bold">Visitar Linkedin</div>
                        <div className="amarilloBack p-2 rounded-full text-black w-[310px] lg:w-[330px] text-center font-bold mt-4">Visitar GitHub</div>
                    </div>
                    <div className="space-y-4 mt-10 lg:mt-0">
                        <h4>Redes sociales</h4>
                        <div className="amarilloBack p-2 rounded-full text-black w-[310px] lg:w-[330px] text-center font-bold">Red Social</div>
                        <div className="amarilloBack p-2 rounded-full text-black w-[310px] lg:w-[330px] text-center font-bold">Red Social</div>
                        <div className="amarilloBack p-2 rounded-full text-black w-[310px] lg:w-[330px] text-center font-bold">Red Social</div>
                    </div>
            </div>
            
        </div>
    )
}