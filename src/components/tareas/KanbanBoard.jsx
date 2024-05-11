"use client";
import {DndContext, closestCenter} from '@dnd-kit/core';
import Columna from "./Columna";
import Tarea from "./Tarea"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import { horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';


export default function KanbanBoard(){    
    
    
    const [ lista, setLista ] = useState(
        [
            {id: "1", titulo:"tttttttttt", tipo: "p"},
            {id: "2", titulo:"wwwwwwwww", tipo: "p"},
            {id: "3", titulo:"aaaaaaaaaaa", tipo: "p"},
            {id: "1001", titulo:"ffffffff", tipo: "w"},
            {id: "1003", titulo:"zzzzzzzzzz", tipo: "w"},
            {id: "1002", titulo:"llllll", tipo: "w"},
        ],
    )

    const handleDragEnd = (event)=>{
        const { active, over } = event;
        console.log(active.id)
        console.log(over.id)
        if (active.id <= 1041 && (over.id >= 1000 || over.id == "droppable") ) {
            setLista((prevLista) => {
                return prevLista.map((item) => {
                    if (item.id === active.id && item.tipo === "p") {
                        // Encontramos el máximo ID en la lista actual
                        const maxId =   Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100;
                        // Asignamos un nuevo ID único (mayor que el máximo actual + 1)
                        const newId = maxId + 1;
                        return { ...item, tipo: "w", id: newId };
                    }
                    return item;
                });
            });
        }
        if(active.id >= 1000 && (over.id <= 1000 || over.id == "droppable" )){
            setLista((prevLista)=> {
                return prevLista.map((item)=> {
                    if(item.id === active.id && item.tipo === "w"){
                        const minId = Math.floor(Math.random() * (900 - 40 + 1)) + 40;
                        const newId = minId - 1;

                        return {...item, tipo:"p", id: newId}
                    }
                    return item
                })
            })
        }
    }

    return(
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h3 className="text-xl mb-4">Tareas</h3>
            <div className="w-[80vw] flex space-x-20">

            <Columna titulo="Pendientes">
             <SortableContext items={lista} strategy={verticalListSortingStrategy}> 

                {
                    lista.map((e, index)=>(
                        e.tipo === "p" &&

                        <Tarea key={index} id={e.id} titulo={e.titulo} borde="border-green-400 "/>
                    ))
                }
                </SortableContext>
            </Columna>

            <Columna titulo="En progreso">
             <SortableContext items={lista} strategy={verticalListSortingStrategy}> 

                {
                    lista.map((e, index)=>(
                        e.tipo === "w" &&
                        <Tarea key={index} id={e.id} titulo={e.titulo} borde="border-yellow-400" />
                    ))
                }

             </SortableContext> 
            </Columna>
            </div>
        </DndContext>
    )
}