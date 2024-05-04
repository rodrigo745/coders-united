import { BiHelpCircle } from "react-icons/bi"

export default function DaPersonales(){
    return(
        <div className="flex flex-col content-center justify-center items-center mt-10">
            <h4 className="mt-4 mb-2 mr-24">Datos Personales</h4>
            { inputText("Nombre de usuario", "text") }
            { inputText("Edad", "number") }
            { inputText("Ubicación", "text") }
        </div>
    )
}


function inputText(texto, tipo){
    return (
        <div className="flex mb-4">
            <input className="p-2 px-4 cuadro w-64 placeholder:text-neutral-500 rounded-full text-xs" placeholder={texto} type={tipo}/>
            <BiHelpCircle color="#CDD589" className="absolute ml-[230px] mt-2"/>
        </div>
    )
}