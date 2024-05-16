"use client";
import { useEffect, useState } from "react";
import { PiNotePencilBold } from "react-icons/pi";
import BuscadorModalProyecto from "../../components/buscador/buscadorModalProyecto";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";


export default function ModalCrearProyecto(props){

    const usuarios = props.usuarios;
    const router = useRouter();
    const [ mostrar, setMostrar ] = useState(false);
    const [ valorMongo, setValorMongo ] = useState({});
    // campos para los datos de mongo
    const [ titulo, setTitulo ] = useState();
    const [ descripcion, setDescripcion ] = useState();
    const [ inicio, setInicio ] = useState();
    const [ finalEstimado, setFinalEstimado ] = useState();
    const [ integrantes, setIntegrantes ] = useState();
    const [ proteccion, setproteccion ] = useState("false");
    
    const mostrarModal = ()=> {
        mostrar ? setMostrar(false) : setMostrar(true);
    }


    // modificacion de datos
    useEffect(()=> {
        setValorMongo({
            titulo: titulo,
            descripcion: descripcion,
            estado: "En desarrollo",
            inicio_proyecto: inicio,
            final_estimado: finalEstimado,
            integrantes: integrantes,
            proteccion: proteccion == "false" ? false : true
        })
    },[titulo, descripcion, inicio, finalEstimado, integrantes, proteccion]);

    // enviar los datos aqui

    const crearProyecto = async(e)=>{
        e.preventDefault();
        
        const subir = await fetch(`/api/datosProyecto/asd`,{
            method: "POST",
            body: JSON.stringify(valorMongo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        // router.push("./proyectos/proyecto_creado/as")
    }

    const get_titulo = (e)=> { setTitulo(e.target.value) }
    const get_descripcion = (e)=> { setDescripcion(e.target.value) }
    const get_inicio = (e)=> { setInicio(e.target.value) }
    const get_final_estimado = (e)=> { setFinalEstimado(e.target.value)}
    const get_integrantes = (arreglo)=> { setIntegrantes(arreglo); console.log(arreglo) }
    const get_proteccion = (e)=> { setproteccion(e.target.id); console.log(e.target.id) }
    

    return(
        <div  className=" w-full justify-center  flex content-center items-center ">
            <p onClick={mostrarModal} className="flex justify-center amarilloBack shadow-md w-[250px]  h-fit font-bold text-black text-center p-2 rounded-full mt-5 mb-4 lg:mb-0 lg:mt-0 lg:ml-5 cursor-pointer">
                <PiNotePencilBold className="mt-1 scale-125 z-10"/>
                <span className="ml-2">
                    Crear proyecto
                </span>
            </p>
            {/* Modal */}
            {
                mostrar && 
                    <div  className="modalContenedor z-30">
                        <div onClick={mostrarModal} className="w-screen h-screen"></div>
                        <div className="modalContenido rounded-lg w-[350px] md:w-[400px] lg:w-[600px] z-50 p-4 h-fit pb-7">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <p className="text-xl ml-2 font-bold mt-2">Nuevo proyecto</p>
                                    <p onClick={mostrarModal} className="h-9 w-14 text-2xl text-center font-bold bg-red-400 rounded-lg cursor-pointer">x</p>
                                </div>
                                <div className="mt-6 text-md flex flex-col">
                                    <input onChange={get_titulo} className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full" placeholder="Nombre del proyecto *" />

                                    <input onChange={get_descripcion} className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 rounded-full w-full mt-5" placeholder="Descripción" />
                                    
                                    <div className="flex space-x-6">
                                        <div className="mt-3 w-[45%]">
                                            <label className="ml-3 text-sm">Inicio estimado</label>
                                            <input onChange={get_inicio} type="date" className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3  text-sm rounded-full w-full mt-1"/>

                                        </div>
                                        <div className="mt-3 w-[45%]">
                                            <label className="ml-3 text-sm">Fin estimado</label>
                                            <input onChange={get_final_estimado} type="date" className="px-5 bg-slate-300 placeholder:text-neutral-700 text-black py-3 text-sm rounded-full w-full mt-1"/>
                                        </div>


                                    </div>
                                    <BuscadorModalProyecto obtener_integrante={get_integrantes} usuarios={usuarios}/>
                                    <div className="flex space-x-5 mt-4 ml-2">
                                        <div className="flex space-x-2 cursor-pointer">
                                            <input onChange={get_proteccion} defaultChecked className="w-4" name="proteccion" id="false" type="radio"/>
                                            <label for="radio1" className="cursor-pointer">Público</label>
                                        </div>
                                        <div className="flex space-x-2 cursor-pointer">
                                            <input onChange={get_proteccion} className="w-4" name="proteccion" id="true" type="radio"/>
                                            <label for="radio2" className="cursor-pointer">Privado</label>
                                        </div>
                                    </div>
                                    {/* Cambiar por una funcion que guarde el proyecto y redirija */}
                                    <button onClick={crearProyecto} className="w-full amarilloBack text-black font-bold text-center p-2 rounded-full mt-5 text-lg">Crear</button>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div> 
    )
}