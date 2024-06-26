import { GET } from "../../../../../../api/datosProyecto/[id]/route";
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";


export default async function VerMisProyectos({params}){

    const datos = await GET();

    const reemplazoInvertido = {
        "0": "a", "1": "b", "2": "c", "3": "d", "4": "e",
        "5": "f", "6": "g", "7": "h", "8": "i", "9": "j",
        "a": "k", "b": "l", "c": "m", "d": "n", "e": "ñ",
        "f": "o", "g": "p", "h": "q", "i": "r", "j": "s",
        "k": "t", "l": "u", "m": "v", "n": "w", "ñ": "x",
        "o": "y", "p": "z", "_": ".", "-": "@"
    };
    
    // Función para decodificar la cadena cifrada
    function decodificar(cadena) {
        const cadenaDecodificada = cadena.split('').map(caracter => reemplazoInvertido[caracter] || caracter).join('');
        return cadenaDecodificada;
    }
    
    // Cadena cifrada
    const cadenaCifrada = params.usuario;
    
    // Decodificar la cadena cifrada
    const cadenaDecodificada = decodificar(cadenaCifrada);


    const correo = cadenaDecodificada;

    return(
        <div className="w-full">
            <h3 className="text-lg">Todos los proyectos ( {datos.length} )</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center place-content-center place-items-center  lg:gap-x-20 xl:gap-x-16 2xl:gap-x-20 gap-y-10">
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
                                    <div className="flex justify-between">
                                        <Link href={`./proyecto_creado/${e._id}`} className=" ml-1 mt-1">{e.titulo} {` -->`} </Link>
                                        <p className="h-4 w-4 bg-green-700 mt-2 mr-1 rounded-sm"></p>
                                    </div>
                                :
                                <div className="flex justify-between">
                                        <p>{e.titulo}</p>
                                        <p className="h-4 w-4 bg-red-500 mt-2 mr-1 rounded-sm"></p>
                                    </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}