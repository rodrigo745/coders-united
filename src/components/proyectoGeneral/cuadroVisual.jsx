export default function CuadroVisual(){

    


    return(
        <div className="flex flex-col lg:flex lg:flex-row w-[90vw] lg:w-[60vw]">
             <div className="cuadro space-y-5 lg:w-[270px] h-fit p-2 lg:px-4 py-5 mt-6 rounded-lg text-sm lg:mb-14">
                        <button className="amarilloBack h-fit w-[140px] lg:w-full text-black p-2 rounded-full font-bold ">Requerimientos</button>
                        <button className="amarilloBack h-fit w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Repositorio</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Contabilidad</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Diagramas</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Enlaces</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold ml-3 lg:ml-0">Evaluación</button>
                        <button className="amarilloBack w-[140px] lg:w-full text-black p-2 rounded-full font-bold">Reuniones</button>
                    </div>
                    <div className="cuadro min-h-36 lg:w-full lg:ml-7 mt-6 rounded-lg p-2">
                        <div className="flex justify-between">
                            <button className="amarilloBack w-[100px] lg:w-[130px] text-black p-1.5 rounded-full font-bold">Notas</button>
                            <button className="amarilloBack w-[100px] lg:w-[130px] text-black p-1.5 rounded-full font-bold">Chat</button>
                        </div>
                        
                        {/* Contenido */}
                    </div>
        </div>
    )
}