import Link from "next/link";

export default function IdProyecto({params}){

    return(
        <div className="">
            <div>
                {/* Main */}
                <div className="cuadro w-[60vw] h-[300px] rounded-lg shadow-md p-4">
                    {/* Tablero info general */}
                    <h2 className="rounded-full w-[260px] text-center fondo shadow-sm  p-2">Nombre del proyecto</h2>
                    <div className="flex">
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

                </div>
            </div>
            <div>{/* Columna izquierda */}</div>
        </div>
        
    )
}