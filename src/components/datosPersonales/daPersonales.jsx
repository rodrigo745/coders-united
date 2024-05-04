import { BiHelpCircle } from "react-icons/bi"

export function DaPersonales(){
    return(
        <div className="flex flex-col content-center justify-center items-center mt-4 md:mt-10">
            <h4 className="mt-4 mb-4 mr-28">Datos Personales</h4>
            { inputText("Nombre de usuario", "text") }
            { inputText("Edad", "number") }
            { inputText("Ubicación", "text") }

            <h4 className="mt-4 md:mt-10 mb-4 mr-24">Datos profesionales</h4>
            { inputText("Rama a la que pertenece", "text") }
            { inputText("Puesto", "text") }
            { inputText("Disponibilidad", "text") }

        </div>
    )
}


function inputText(texto, tipo){
    return (
        <div className="flex mb-5">
            <input className="p-3 px-5 cuadro w-72 placeholder:text-neutral-500 rounded-full text-xs pr-12" placeholder={texto} type={tipo}/>
            <BiHelpCircle color="#CDD589" className="absolute scale-150 ml-[255px] mt-3"/>
        </div>
    )
}