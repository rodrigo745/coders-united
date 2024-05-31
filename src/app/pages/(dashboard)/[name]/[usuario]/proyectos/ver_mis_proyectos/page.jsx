import { GET } from "../../../../../../api/datosProyecto/[id]/route";
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";


export default async function VerMisProyectos({params}){

    const datos = await GET();

    const correo = params.usuario.replace("%40", "@");

    return(
        <div className="w-full">
            <h3 className="text-lg">Todos los proyectos ( {datos.length} )</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center place-content-center place-items-center  lg:gap-20 xl:gap-16 2xl:gap-20">
                {
                    datos.map((e, index)=> (
                        <div key={index} className="p-2 mt-4 w-[300px] h-[200px] cuadro rounded-lg">
                            <div className="w-[100%] h-[80%] rounded-lg border border-yellow-300 mb-2 flex justify-end p-2">
                                
                                {
                                    e.proteccion == true &&
                                    <MdOutlineLock color="#CDD589" className=" bg-slate-700 rounded-sm w-12 h-8 py-0.5 border border-yellow-300"/>
                                }
                                
                            </div>
                            {
                                e.integrantes.some((item)=> item.correo === correo ) ?
                                    <Link href={`./proyecto_creado/${e._id}`} className=" ml-1">{e.titulo} {` -->`} </Link>
                                :
                                    <p>No Perteneces</p>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}