import {useDroppable} from '@dnd-kit/core';

export default function Columna(props){

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });


    return(
        <div ref={setNodeRef} className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col justify-center items-center">
            <h4 className="text-lg">{props.titulo}</h4>
            <div className="h-full w-full mt-2">
                    {props.children}
            </div>
        </div>
    )
}

