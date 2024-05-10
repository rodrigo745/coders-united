"use client";
import {DndContext} from '@dnd-kit/core';
import { useEffect, useState } from "react"
import Columna from "./Columna";
import Tarea from "./Tarea"

export default function KanbanBoard(){

    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Tarea titulo="Nueva tarea"></Tarea>
      );

    return(
        <DndContext onDragEnd={handleDragEnd}>
            <h3 className="text-xl mb-4">Tareas</h3>
            <div className="w-[80vw] flex space-x-20">
            <Columna>
                {!isDropped ? draggableMarkup : null}
            </Columna>
                {/* Columnas */}
                <Columna>
                
                {isDropped ? draggableMarkup : 'Drop here'}
                </Columna>
            </div>

        </DndContext>
    )
}

function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }