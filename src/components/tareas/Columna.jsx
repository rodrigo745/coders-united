import {useDroppable} from '@dnd-kit/core';

export default function Columna(props){

    const {isOver, setNodeRef} = useDroppable({
        id: props.tablero,
      });

    return(
        <div ref={setNodeRef} className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col items-center ">
            <h4 className="text-lg">{props.titulo}</h4>
            <div className="h-fit w-full mt-2 flex flex-col-reverse overflow-y">
                    {props.children}
            </div>
        </div>
    )
}

