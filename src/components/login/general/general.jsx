import { IhuracanAmarillo } from "../../../../public/iconos"

export default function LoginGeneral(props){
    return(
        <div className="p-8 w-full mx-5 md:mx-0 md:w-[500px] flex flex-col items-center  h-[380px] cuadro rounded-lg shadow-md">
            <div className="flex mb-2 pr-6  md:pr-10">
                <div className=" scale-75 md:scale-75">
                    {IhuracanAmarillo}
                </div>
                <h2 className="mt-2 ml-2 text-2xl md:text-3xl font-bold amarillo">Coders United</h2>
            </div>

            <div className="w-full">
                {props.botonGoogle}
                <button className={`${estiloBtn} cursor-not-allowed`}>Ingresar con GitHub</button>
                <button className={`${estiloBtn} cursor-not-allowed`}>Ingresar con mi Correo</button>

            </div>


        </div>
    )
}

const estiloBtn = "w-full mt-8 border rounded-full boder-2 border-[#CDD589] p-3 hover:bg-[#CDD589] font-bold text-md md:text-lg hover:text-black transition"