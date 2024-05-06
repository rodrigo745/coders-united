

export default function Buscador(props){

    const datosDB = props.datos;

    return(
        <div>
            <div className="mb-3">
                <input type="search" className="p-2 px-5 border border-1 active:border-yellow-300 rounded-full cuadro w-[320px]" 
                placeholder="Buscar usuario"/>
            </div>
        </div>
    )
}