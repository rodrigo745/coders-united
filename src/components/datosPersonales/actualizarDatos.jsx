"use client";
import { useSession } from "next-auth/react"
import Image from "next/image.js";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation.js";

// Componentes
import { DaPersonales, DaBio, DaSegundaColumna } from "./daPersonales.jsx";


// obtencion y guardado de los datos obtenidos de los campos
export default function ActualizarDatos(props){
    
    const { data: session } = useSession();
    const datosGet = props.datos;
    const router = useRouter();
    // variables de valor y modificacion
    let [ nombreReal, setNombreReal ] = useState("");    
    const [ edad, setEdad ] = useState("");
    const [ ubicacion, setUbicacion ] = useState("");
    const [ rama, setRama ] = useState("");
    const [ puesto, setPuesto ] = useState("");
    const [ disponibilidad, setDisponibilidad ] = useState("");
    const [ portafolio, setPortafolio ] = useState("");
    const [ datoAdicional, setDatoAdicional ] = useState("");
    const [ herramientas, setHerramientas ] = useState(""); 
    const [ telefono, setTelefono ] = useState("");
    const [ linkedin, setLinkedin ] = useState("");
    const [ github, setGitHub ] = useState("");
    const [ social_uno, setSocialUno ] = useState("");
    const [ social_dos, setSocialDos ] = useState("");
    const [ social_tres, setSocialTres ] = useState("");
    const [ biografia, setBiografia ] = useState("");
    const [ datosGuardadosPop, setDatosGuardadosPop ] = useState(false);
    
    // esta variable contendra el conjunto de nuevo datos para subir
    const [ datosMongo, setDatosMongo ] = useState({});
    let encontrado;
    
    // controlo que se actualicen los datos para mostrarlos al usuario
    useEffect(()=>{
        let datosFind;
        let encon;
        if(session?.user){
            datosFind = datosGet.find(item => item.correo === session.user.email);
            encon = datosGet.some(item => item.correo === session.user.email);
            if(encon){
                setNombreReal(datosFind.nombre_real)
                setEdad(datosFind.edad);
                setUbicacion(datosFind.ubicacion);
                setRama(datosFind.rama);
                setPuesto(datosFind.puesto);
                setDisponibilidad(datosFind.disponibilidad);
                setPortafolio(datosFind.portafolio);
                setDatoAdicional(datosFind.datos_adicionales);
                
                // ESPACIO PARA HABILIDADES TECNICAS
                // ESPACIO PARA HABILIDADES TECNICAS
                setTelefono(datosFind.telefono);
                setLinkedin(datosFind.linkedin);
                setGitHub(datosFind.github);
                setSocialUno(datosFind.social_uno);
                setSocialDos(datosFind.social_dos);
                setSocialTres(datosFind.social_tres);
                setBiografia(datosFind.biografia);
            }
        }

    },[session?.user, datosGet])
    
    // guardo los datos modificados en la variable de conjunto
    useEffect(()=>{
        if(session?.user){
            let datos = datosGet.find((item)=> item.correo === session.user.email );
            let nuevaHerramienta;
            if(datos && datos.herramientas){
                nuevaHerramienta = [...datos.herramientas, herramientas]
            } else {
                nuevaHerramienta = herramientas
            }
            if(herramientas === ""){
                setDatosMongo({
                    nombre_google: session.user.name,
                    correo: session.user.email,
                    imagen: session.user.image,
                    nombre_real: nombreReal,
                    edad: edad,
                    ubicacion: ubicacion,
                    rama: rama,
                    puesto: puesto,
                    disponibilidad: disponibilidad,
                    portafolio: portafolio,
                    dato_adicional: datoAdicional,
                    // ESPACIO PARA HABILIDADES TECNICAS
                    // ESPACIO PARA HABILIDADES TECNICAS
                    telefono: telefono,
                    linkedin: linkedin,
                    github: github,
                    social_uno: social_uno,
                    social_dos: social_dos,
                    social_tres: social_tres,
                    biografia: biografia,
                    extra_uno: "",
                    extra_dos: "",
                    extra_tres: 0,
                    extra_cuatro: []
                })
            } else {
                setDatosMongo({
                    nombre_google: session.user.name,
                    correo: session.user.email,
                    imagen: session.user.image,
                    nombre_real: nombreReal,
                    edad: edad,
                    ubicacion: ubicacion,
                    rama: rama,
                    puesto: puesto,
                    disponibilidad: disponibilidad,
                    portafolio: portafolio,
                    dato_adicional: datoAdicional,
                    herramientas: nuevaHerramienta,
                    // ESPACIO PARA HABILIDADES TECNICAS
                    // ESPACIO PARA HABILIDADES TECNICAS
                    telefono: telefono,
                    linkedin: linkedin,
                    github: github,
                    social_uno: social_uno,
                    social_dos: social_dos,
                    social_tres: social_tres,
                    biografia: biografia,
                    extra_uno: "",
                    extra_dos: "",
                    extra_tres: 0,
                    extra_cuatro: []
                })
            }
            }
        },[
            edad, nombreReal, ubicacion, rama, puesto, disponibilidad, portafolio, datoAdicional, herramientas,
            telefono, linkedin, github, social_uno, social_dos, social_tres, session?.user, biografia, datosGet
        ])
        
    
    if(session?.user){

    const datosFind = datosGet.find((item) => item.correo === session.user.email);
        
    // Esta funcion sube los datos a mongo
    const prueba = async(e)=>{
        e.preventDefault();
    
        encontrado = datosGet.some(item => item.correo === session.user.email);
        
        // Crear o Actualizar
        if(!encontrado){ // si coincide el correo actual con uno de mongo, no se crea el registro
            // crear 
            const subir = await fetch(`/api/datosPerfil/as`, {
                method: "POST",
                body: JSON.stringify(datosMongo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            router.refresh();
        } else {
            // actualizar
            const idEncontrada = datosFind._id;

            if(encontrado){
                setDatosGuardadosPop(true);
                const actualizar = await fetch(`/api/datosPerfil/${idEncontrada}`, 
                {
                    method: "PUT",
                    body: JSON.stringify(datosMongo),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                await new Promise((resolve)=> setTimeout(resolve, 1000) )
                setDatosGuardadosPop(false);
                setHerramientas("");
                router.refresh();
            }
        }    
    }

    // obtengo los cambios y modifico la variable base para ser subida luego
    // le paso la funcion como props al componente corresponiente para recolectar la info
    const get_nombre_real = (e)=>{setNombreReal(e.target.value)}
    const get_edad = (e)=>{setEdad(e.target.value)}
    const get_ubicacion = (e)=>{setUbicacion(e.target.value)}
    const get_rama = (e)=>{setRama(e.target.value)}
    const get_puesto = (e)=>{setPuesto(e.target.value)}
    const get_disponibilidad = (e)=>{setDisponibilidad(e.target.value)}
    const get_portafolio = (e)=>{setPortafolio(e.target.value)}
    const get_datoAdicional = (e)=>{setDatoAdicional(e.target.value)}
    // ESPACIO PARA HABILIDADES TECNICAS
    // ESPACIO PARA HABILIDADES TECNICAS
    // ESPACIO PARA HABILIDADES TECNICAS
    const get_telefono = (e)=>{setTelefono(e.target.value)}
    const get_linkedin = (e)=>{setLinkedin(e.target.value)}
    const get_github = (e)=>{setGitHub(e.target.value)}
    const get_social_uno = (e)=>{setSocialUno(e.target.value)}
    const get_social_dos = (e)=>{setSocialDos(e.target.value)}
    const get_social_tres = (e)=>{setSocialTres(e.target.value)}
    const get_biografia = (e)=>{setBiografia(e.target.value)}
    const get_herramientas = (e)=>{setHerramientas(e.target.value)}

    return(
        <form onSubmit={prueba} className="flex flex-col md:flex md:flex-row">
            <div>

            {
                session?.user ?
                <div className="flex justify-center">
                <div className="w-[280px] cuadro py-6 flex flex-col justify-center items-center rounded-lg">
                    <Image className="rounded-full border-2 border-yellow-300" 
                    src={session.user.image} width={60} height={60} alt="foto de perfil" />
                    <div className="mt-4">

                    <p className="font-bold text-center text-md md:text-md amarillo">
                        {session.user.name}    
                    </p>
                    <p className=" text-center text-neutral-500 text-xs scale-100 mt-2">
                        {session.user.email}    
                    </p>
                    </div>
                </div>

                </div>
                :
                <div>
                    <p>No esta registrado</p>
                </div>
            }
            <DaPersonales 
                nombre_real={get_nombre_real} valor_nombre_real={nombreReal}
                edad={get_edad} valor_edad={edad}
                ubicacion={get_ubicacion} valor_ubicacion={ubicacion}
                rama={get_rama}   valor_rama={rama}
                puesto={get_puesto}  valor_puesto={puesto}
                disponibilidad={get_disponibilidad} valor_disponibilidad={disponibilidad}
            />
  
            <div className="hidden md:block">
                <button className="amarilloBack px-4 py-2 text-black font-bold rounded-full w-full">Guardar cambios</button>
            </div>
            </div>
            <div >
                <DaBio biografia={get_biografia} valor_biografia={biografia} />
                <DaSegundaColumna
                    portafolio={get_portafolio} valor_portafolio={portafolio}
                    dato_adicional={get_datoAdicional} valor_dato_adicional={datoAdicional}
                    herramientas={get_herramientas} valor_herramientas={herramientas
                    }
                    /* ESPACIO PARA HABILIDADES TECNICAS */ 
                    tablero_herramientas={datosFind} 
                    /* ESPACIO PARA HABILIDADES TECNICAS */ 
                    telefono={get_telefono} valor_telefono={telefono}
                    linkedin={get_linkedin} valor_linkedin={linkedin}
                    github={get_github} valor_github={github}
                    social_uno={get_social_uno} valor_social_uno={social_uno}
                    social_dos={get_social_dos} valor_social_dos={social_dos}
                    social_tres={get_social_tres} valor_social_tres={social_tres}

                />
            </div>
            <div className="md:hidden mb-20 flex justify-center">
                <button onSubmit={prueba} className="amarilloBack px-4 py-2 text-black font-bold rounded-full w-72">Guardar cambios</button>
            </div>
            {
                datosGuardadosPop &&
                    <div className="animate-pulse p-2 px-4 bg-green-700 rounded-md font-bold fixed right-0 bottom-0 mr-20 mb-20">
                        Guardando
                    </div>
            }
        </form>
    )
}
}