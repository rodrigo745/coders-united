import { GET } from "../../../../../../api/datosProyecto/[id]/route";
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";


export default async function VerMisProyectos({params}){

    const datos = await GET();

    const correo = params.usuario.replace("%40", "@");

    return(
        <div>
            <h3 className="text-lg">Todos los proyectos ( {datos.length} )</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    datos.map((e, index)=> (
                        <div key={index} className="p-2 mt-4 w-[300px] h-[200px] cuadro rounded-lg">
                            <div className="w-[100%] h-[80%] rounded-lg border border-yellow-300 mb-2 flex justify-end p-2">
                                
                                {
                                    e.proteccion == true &&
                                    <MdOutlineLock color="#CDD589" className=" bg-slate-700 rounded-sm w-12 h-8 py-0.5 border border-yellow-300"/>
                                }
                                
                            </div>
                            
                            <Link href={`./proyecto_creado/${e._id}`} className=" ml-1">{e.titulo} {` -->`} </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}