import {useDraggable} from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Tareas(props) {

    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: props.id,
      });
      
      const style = transform ? {
        backgroundColor: "#677483",
        borderColor: "white",
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, 
        transition,
      } : undefined;



    return(
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}  className={`bg-black p-3 text-sm border-l-8 mb-3 focus:fixed ${props.borde}`}>
            {/* Tareas */}
            {props.titulo}
            {/* Cambiar el contendor que oculta los items */}
        </div>
    )
}