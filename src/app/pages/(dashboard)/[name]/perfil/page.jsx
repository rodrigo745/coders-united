import ActualizarDatos from "../../../../../components/datosPersonales/actualizarDatos";

import { GET } from "../../../../api/datosPerfil/route";

export default async function Perfil(){


    const datos = await GET();

    return(
        <div>
            <ActualizarDatos datos={datos}/>
        </div>
    )
}