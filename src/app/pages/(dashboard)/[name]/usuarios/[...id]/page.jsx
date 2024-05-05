import { GET } from "../../../../../api/usuarioGoogle/[id]/route"

export default async function IdUsuario({params}){
    
    const datosDB = await GET(); 
    
    console.log(params.id[1])
    
    const filtro = datosDB[params.id[1]]
    console.log(filtro)

    return (
        <div>
            <h3>Informacion del usuario</h3>
            <br />

            <p>Nombre: {filtro.nombre} </p>
            <br />
            <p>Correo: {filtro.correo} </p>
            <br />
            <p>¿Tiene Imagen?: {filtro.nombre ? "SI" : "No"} </p>
            <br />
            <br />
            <br />
            <br />
            <p>Modificar luego</p>
        </div>
    )
}