export default function InfoGeneral(){
    return(
        <div className="cuadro w-[90vw] lg:w-[60vw] h-[600px] lg:h-[300px] rounded-lg shadow-md p-4">
             <h2 className="rounded-r-full border-l-8 border-yellow-200 w-[220px] fondo shadow-sm p-2">Nombre del proyecto</h2>
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
    )
}