"use client";
import { DndContext, closestCenter } from "@dnd-kit/core"
import { useState } from "react"


export default function Tareas(){

    const [ lista, setLista ] = useState([
        {id: 1, "titulo": "Comenzar el creador de tareas"},
        {id: 1, "titulo": "Comenzar el creador de tareas22"},
        {id: 1, "titulo": "Comenzar el creador de tareas33"}
    ]);


    return(
        <div className="">
            <h3 className="text-xl mb-4">Tareas</h3>
            <DndContext collisionDetection={closestCenter}>
            <div className="w-[80vw] flex space-x-20">
                <div className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col justify-center items-center">
                    <h4 className="text-lg">Pendientes</h4>
                    <div className="h-full w-full mt-2"> {/* Lista de tareas */}
                        
                        {
                            lista.map((e, index)=> (
                                <div key={index} className="bg-black p-3 text-sm border-l-8 border-green-400 mb-3">
                                    {e.titulo}
                                </div>
                            ))
                        }
                        
                    </div>
                    <div> {/* Guardar tarea */}

                    </div>
                </div>



                <div className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col justify-center items-center">
                    <h4 className="text-lg">En progreso</h4>
                    <div className="h-full w-full mt-2"> {/* Lista de tareas */}
                    {
                            lista.map((e, index)=> (
                                <div key={index} className="bg-black p-3 text-sm border-l-8 border-yellow-400 mb-3">
                                    {e.titulo}
                                </div>
                            ))
                        }
                    </div>
                    <div> {/* Guardar tarea */}

                    </div>
                </div>
            </div>
            </DndContext>
        </div>
    )
}