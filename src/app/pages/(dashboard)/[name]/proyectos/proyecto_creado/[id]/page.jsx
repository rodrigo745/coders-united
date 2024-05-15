import Link from "next/link";

export default function IdProyecto({params}){

    return(
        <div className="">
            <div className="flex flex-col justify-center w-[100vw] lg:w-[80vw] items-center lg:block">
                {/* Main */}
                <div className="cuadro w-[90vw] lg:w-[60vw] h-[600px] lg:h-[300px] rounded-lg shadow-md p-4">
                    {/* Tablero info general */}
                    <h2 className="rounded-full w-[260px] text-center fondo shadow-sm  p-2">Nombre del proyecto</h2>
                    <div className="flex flex-col lg:flex lg:flex-row">
                        <div className="mt-4 ml-2">
                            <p className="font-bold amarillo"> Usuario:
                                <span className="text-white font-normal"> Rodrigo javier Quinteros</span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Nivel:
                                <span className="text-white font-normal"> Administrador</span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Estado del proyecto:
                                <span className="text-white font-normal"> En desarrollo</span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Estado del proyecto:
                                <span className="text-white font-normal"> En desarrollo</span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Estado del proyecto:
                                <span className="text-white font-normal"> En desarrollo</span>
                            </p>
                            <p className="font-bold amarillo mt-3"> Estado del proyecto:
                                <span className="text-white font-normal"> En desarrollo</span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[60%] h-56 ml-20">
                            <p className="text-6xl font-bold rotate-1">Gráficos</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* navegacion del proyecto */}
                    <div className="cuadro space-y-4 w-[270px] h-fit p-3 py-5 mt-6 rounded-lg">
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Requerimientos</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Repositorio</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Contabilidad</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Diagramas</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Enlaces</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Evaluación</button>
                        <button className="amarilloBack w-full text-black p-2 rounded-full font-bold">Reuniones</button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>{/* Columna izquierda */}</div>
        </div>
        
    )
}