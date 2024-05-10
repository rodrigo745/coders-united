"use client";
import {DndContext, closestCenter} from '@dnd-kit/core';
import Columna from "./Columna";
import Tarea from "./Tarea"
import { SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import { verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function KanbanBoard(){    
    
    const [ lista, setLista ] = useState([
        {id: "1", titulo:"nasdasd"},
        {id: "2", titulo:"nasdasd asdsdsd"},
        {id: "3", titulo:"nasdasa asdd"}
    ])

    return(
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h3 className="text-xl mb-4">Tareas</h3>
            <div className="w-[80vw] flex space-x-20">
            <SortableContext items={lista} strategy={verticalListSortingStrategy}>
            <Columna >

                {
                    lista.map((e, index)=>(
                        <Tarea key={index} id={e.id} titulo={e.titulo} />
                    ))
                }

            </Columna>
            </SortableContext>
            </div>

        </DndContext>
    )
}

function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }