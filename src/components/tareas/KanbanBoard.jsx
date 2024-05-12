"use client";
import {DndContext, closestCenter} from '@dnd-kit/core';
import Columna from "./Columna";
import Tarea from "./Tarea"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import {
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  

export default function KanbanBoard(){    
    
    
    const [ lista, setLista ] = useState(
        [
            {id: "1", titulo:"tttttttttt", tipo: "p"},
            {id: "2", titulo:"wwwwwwwww", tipo: "p"},
            {id: "3", titulo:"aaaaaaaaaaa", tipo: "p"},
            {id: "1001", titulo:"ffffffff", tipo: "w"},
            {id: "1003", titulo:"zzzzzzzzzz", tipo: "w"},
            {id: "1002", titulo:"llllll", tipo: "w"},
            {id: "2001", titulo:"88888", tipo: "t"},
            {id: "2002", titulo:"2222222", tipo: "t"},
            {id: "2003", titulo:"555555555", tipo: "t"},

        ],
    );
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
    
    const sensors = useSensors(
      mouseSensor,
      touchSensor,
      keyboardSensor,
    );

    const handleDragEnd = (event)=>{
        const { active, over } = event;
        console.log(active.id)
        console.log(over.id)
        // de pendiente a progreso
        if (active.id <= 1041 && (over.id >= 1000 || over.id == "progreso") ) {
            setLista((prevLista) => {
                return prevLista.map((item) => {
                    if (item.id === active.id && item.tipo === "p") {
                        // Encontramos el máximo ID en la lista actual
                        const maxId =   Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100;
                        const newId = maxId + 1;
                        return { ...item, tipo: "w", id: newId };
                    }
                    return item;
                });
            });
        }
        // de progreso a pendiente
        if(active.id >= 1000 && (over.id <= 1000 || over.id == "pendiente" )){
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
        // de progreso a terminado
        if(active.id >= 1000 && (over.id >= 2000 || over.id == "terminado" )){
            setLista((prevLista)=> {
                return prevLista.map((item)=> {
                    if(item.id === active.id && item.tipo === "w"){
                        const minId = Math.floor(Math.random() * (3100 - 2040 + 1)) + 2040;
                        const newId = minId - 1;
                        return {...item, tipo:"t", id: newId}
                    }
                    return item
                })
            })
        }
        // de terminado a progreso
        if(active.id >= 2000 && (over.id <= 2000 || over.id == "progreso" )){
            setLista((prevLista)=> {
                return prevLista.map((item)=> {
                    if(item.id === active.id && item.tipo === "t"){
                        const minId = Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100;
                        const newId = minId - 1;
                        return {...item, tipo:"w", id: newId}
                    }
                    return item
                })
            })
        }
    }

    return(
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <h3 className="text-xl mb-4">Tareas</h3>
            <div className="w-[99vw] lg:w-[80vw] flex flex-col lg:flex lg:flex-row lg:space-x-20 space-y-10 mb-10">

            <Columna titulo="Pendientes" tablero="pendiente">

                {
                    lista.map((e, index)=>(
                        e.tipo === "p" &&
                            <Tarea  key={index} id={e.id} titulo={e.titulo}  borde="border-green-400 "/>
                    ))
                }
            </Columna>

            <Columna titulo="En progreso" tablero="progreso">
             <SortableContext items={lista} strategy={verticalListSortingStrategy}> 

                {
                    lista.map((e, index)=>(
                        e.tipo === "w" &&
                        <Tarea key={index} id={e.id} titulo={e.titulo} borde="border-yellow-400" />
                    ))
                }

             </SortableContext> 
            </Columna>

            <Columna titulo="Terminado" tablero="terminado">
             <SortableContext items={lista} strategy={verticalListSortingStrategy}> 

                {
                    lista.map((e, index)=>(
                        e.tipo === "t" &&
                        <Tarea key={index} id={e.id} titulo={e.titulo} borde="border-red-400" />
                    ))
                }

             </SortableContext> 
            </Columna>
            </div>
        </DndContext>
    )
}