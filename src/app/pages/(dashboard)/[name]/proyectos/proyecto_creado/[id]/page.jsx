import Link from "next/link";

export default function IdProyecto(){

    return(
        <div className="flex flex-col lg:flex lg:flex-row">
            <div className="flex flex-col  justify-center w-[100vw] lg:w-[60vw] items-center lg:block">
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
                            <p className="text-6xl font-bold rotate-12">Gráficos</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex lg:flex-row w-[90vw] lg:w-[60vw]">
                    {/* navegacion del proyecto */}
                    <div className="cuadro space-y-4 lg:w-[270px] h-fit p-2 py-5 mt-6 rounded-lg text-sm">
                        <button className="amarilloBack h-fit w-[140px] lg:w-full text-black p-2 rounded-full font-bold ">Requerimientos</button>
                        <button className="amarilloBack h-fit w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Repositorio</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Contabilidad</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Diagramas</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Enlaces</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Evaluación</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Reuniones</button>
                    </div>
                    <div className="cuadro min-h-36 lg:w-full lg:ml-7 mt-6 rounded-lg p-2">
                        <div className="flex justify-between">
                            <button className="amarilloBack w-[100px] lg:w-[200px] text-black p-1.5 rounded-full font-bold">Notas</button>
                            <button className="amarilloBack w-[100px] lg:w-[200px] text-black p-1.5 rounded-full font-bold">Chat</button>
                        </div>
                        
                        {/* Contenido */}
                    </div>
                </div>
            </div>
            <div className="lg:w-[320px] mx-5 lg:mx-10 mt-10 lg:mt-0 mb-10">
                {/* Columna izquierda */} 
                
                <div className="cuadro w-full h-[420px]  rounded-lg p-2">
                    tareas
                </div>
                <div className="cuadro mt-6 h-52 rounded-lg p-2">
                    Integrantes
                </div>
            </div>
        </div>
        
    )
}