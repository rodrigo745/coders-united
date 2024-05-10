

export default function Tareas(){


    return(
        <div className="">
            <h3 className="text-xl mb-4">Tareas</h3>
            <div className="w-[80vw]">
                <div className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col justify-center items-center">
                    <h4 className="text-lg">Pendientes</h4>
                    <div className="h-full w-full mt-2"> {/* Lista de tareas */}
                        <div className="bg-black p-3 text-sm border-l-8 border-green-400">
                            Crear el creador de tareas
                        </div>
                    </div>
                    <div> {/* Guardar tarea */}

                    </div>
                </div>
            </div>
        </div>
    )
}