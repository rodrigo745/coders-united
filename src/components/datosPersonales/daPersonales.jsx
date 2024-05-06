import { BiHelpCircle } from "react-icons/bi"

export function DaPersonales(props){
    return(
        <div className="flex flex-col content-center justify-center items-center mt-4 md:mt-10">
            <h4 className="mt-4 mb-4 mr-28">Datos Personales</h4>
            { inputText("Nombre real", "text", props.nombre_real, props.valor_nombre_real) }
            { inputText("Edad", "number", props.edad, props.valor_edad) }
            { inputText("Ubicación", "text", props.ubicacion, props.valor_ubicacion) }

            <h4 className="mt-4 md:mt-10 mb-4 mr-24">Datos profesionales</h4>
            <div className=" px-5 cuadro w-72 rounded-full text-xs pr-4 mb-5">
                <select value={props.valor_rama} onChange={props.rama} className="w-full cuadro py-3" id="opcionesRama" name="opcionesRama">
                    <option className="text-neutral-500"  value="none">Rama a la que pertenece</option>
                    <option value="Desarrollo">Desarrollo</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            { inputText("Puesto", "text", props.puesto, props.valor_puesto) }
            <div className=" px-5 cuadro w-72 rounded-full text-xs pr-4 mb-5" >
                <select value={props.valor_disponibilidad} onChange={props.disponibilidad} className="w-full cuadro py-3" id="opcionesDisponibi" name="opcionesDisponi" >
                    <option className="text-neutral-500" value="none">Disponibilidad</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Full-time">Full-time</option>
                </select>
            </div>

        </div>
    )
}

export function DaBio(){
    return (
        <div className="flex flex-col content-center justify-center items-center mt-4 md:mt-0 md:mr-24">
            <textarea placeholder="Biografía"  className="resize-none h-40 p-4 placeholder:text-neutral-500 text-sm cuadro md:w-[800px] w-72 rounded-xl min-w-36 pr-8"/>
            <BiHelpCircle color="#CDD589" className="absolute scale-150 md:ml-[750px] md:mb-28 ml-[245px] mb-28"/>
        </div>
    )
}


export function DaSegundaColumna(){
    return(
        <div className="flex flex-col md:flex md:flex-row justify-center md:justify-start mb-10">

        <div className="flex flex-col md:w-fit justify-center items-center md:ml-12 md:mt-[105px] mt-10">
            {inputText("Url del portafólio personal", "texto")}

            { inputText("Dato adicional", "text") }

            <h4 className="md:mt-[102px] mb-4 mr-24 mt-4">Datos académicos</h4>
            { inputText("Nivel de estudios", "text") }
            { inputText("Carrera", "text") }
            { inputText("Institución académica", "text") }
        </div>
        <div className="flex justify-center mt-4 md:mt-0">
            <div className="md:mt-[330px] md:ml-12">
                <h4 className="mb-3 ml-5">Datos de contacto</h4>
                { inputText("Teléfono", "number") }
                { inputText("Linkedin", "text") }
                { inputText("GitHub", "text") }

            </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-0">
            <div className="md:mt-[330px] md:ml-12">
                <h4 className="mb-3 ml-5">Redes sociales</h4>
                { inputText("Ej: Facebook", "text") }
                { inputText("Ej: Instagram", "text") }
                { inputText("Ej: X", "text") }

            </div>
        </div>
        </div>
    )
}



function inputText(texto, tipo, cambios, valor){
    return (
        <div className="flex mb-5">
            <input onChange={cambios} value={valor} className="p-3 px-5 cuadro w-72 placeholder:text-neutral-500 rounded-full text-xs pr-12" placeholder={texto} type={tipo}/>
            <BiHelpCircle color="#CDD589" className="absolute scale-150 ml-[255px] mt-3"/>
        </div>
    )
}