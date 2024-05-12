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
        <div ref={setNodeRef} className="cuadro mx-7 lg:mx-0 lg:w-[20vw] rounded-lg h-[500px] p-4 flex flex-col items-center">
            <h4 className="text-lg">{props.titulo}</h4>
            <div className='w-full flex flex-col h-[92%] justify-between space-y-2'>
                <div className='overflow-auto h-full'>
                    <div className="h-fit min-h-32 w-full mt-2 flex flex-col-reverse px-2 justify-end ">
                        {props.children}
                    </div>
                </div>
            <div className='w-full text-center flex space-x-2 px-2'>
                <input type="text" placeholder={`Agregar tarea ${
                    props.tablero == "progreso" ? "en progrso" : props.tablero}`} 
                    className='p-2 bg-slate-600 rounded-full px-4 w-full'
                />
                <p className='font-bold text-black p-1 px-3 text-3xl amarilloBack rounded-full cursor-pointer'>+</p>
            </div>
            </div>
        </div>
    )
}

