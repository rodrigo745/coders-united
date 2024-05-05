import { GET } from "../../../../../api/usuarioGoogle/[id]/route"

export default async function IdUsuario({params}){
    
    const datosDB = await GET(); 
    
    console.log(params.id[1])
    
    const filtro = datosDB[params.id[1]]
    console.log(filtro)

    return (
        <div>
            <h3>Informacion del usuario</h3>
            <p>Nombre: {filtro.nombre} </p>
            <p>Correo: {filtro.correo} </p>
            <p>¿Tiene Imagen?: {filtro.nombre ? "SI" : "No"} </p>
        </div>
    )
}