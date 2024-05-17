import { GET } from "../../../../../api/datosProyecto/[id]/route";
import Link from "next/link";

export default async function VerMisProyectos(){

    const datos = await GET();
    
    return(
        <div>
            <h3 className="text-lg">Todos los proyectos ( {datos.length} )</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    datos.map((e, index)=> (
                        <div key={index} className="p-2 mt-4 w-[300px] h-[200px] cuadro rounded-lg">
                            <div className="w-[100%] h-[80%] rounded-lg border border-yellow-300 mb-2">

                            </div>
                            <Link href={`./proyecto_creado/${e._id}`} className=" ml-1">{e.titulo} {` -->`} </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}