import ActualizarDatos from "../../../../../components/datosPersonales/actualizarDatos";

import { GET } from "../../../../api/datosPerfil/route";

export default async function Perfil(){


    const datos = await JSON.parse(JSON.stringify(GET()));


    return(
        <div>
            <ActualizarDatos datos={datos}/>
        </div>
    )
}