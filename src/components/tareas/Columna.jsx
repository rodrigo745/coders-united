import {useDroppable} from '@dnd-kit/core';

export default function Columna(props){

    const {isOver, setNodeRef} = useDroppable({
        id: props.tablero,
        modifiers: [
            {
                name: 'restrictTo',
                options: {
                    restriction: null, // Permite que los elementos arrastrables salgan del contenedor
                },
            },
        ],
    });

    return(
        <div ref={setNodeRef} className="cuadro w-[20vw] rounded-lg h-[500px] p-4 flex flex-col items-center">
            <h4 className="text-lg">{props.titulo}</h4>
            <div className='w-full flex flex-col h-full justify-between'>
                <div className='overflow-auto'>
                    <div className="h-fit min-h-56 w-full mt-2 flex flex-col-reverse  my-10 px-2 justify-end">
                        {props.children}
                    </div>
                </div>
            <div className='w-full amarilloBack text-center p-2 rounded-full cursor-pointer'>
                <p className='font-bold text-black '>Crear tarea</p>
            </div>
            </div>
        </div>
    )
}

