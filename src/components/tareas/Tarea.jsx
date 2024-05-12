import {useDraggable} from '@dnd-kit/core';

export default function Tareas(props) {

    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: props.id,
        modifiers: [
          {
              name: 'restrictTo',
              options: {
                  restriction: true, // Permite que los elementos arrastrables salgan del contenedor
              },
          },
      ],
      });
      
      const style = transform ? {
        backgroundColor: "#677483",
        borderColor: "white",
        position: "absolute",
        width: "280px",
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, 
        transition,
      } : undefined;



    return(
      <div className=''>

        <div ref={setNodeRef} style={style} {...listeners} {...attributes}  className={`bg-black p-3 text-sm border-l-8 mb-3 ${props.borde}`}>
            {/* Tareas */}
              {props.titulo}
            {/* Cambiar el contendor que oculta los items */}
        </div>
      </div>
    )
}