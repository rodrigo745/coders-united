import {useDraggable} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function Tareas(props) {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
      });
      const style =  {
        transform: CSS.Transform.toString(transform),
      }



    return(
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}  className="bg-black p-3 text-sm border-l-8 border-green-400 mb-3">
            {/* Tareas */}
            {props.titulo}
        </div>
    )
}