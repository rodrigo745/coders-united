import VerificarUser from "../../../../../components/verificarUser/verificarUser"
import { GET as GET_GOOGLE } from "../../../../api/usuarioGoogle/[id]/route";
import { GET as GET_PERFIL } from "../../../../api/datosPerfil/[id]/route"

export default async function Inicio() {
    // Obtengo los datos de la BD y los envio al componente "VerificarUser" para comparar
    const datosGoogle = await GET_GOOGLE();
    const datosPerfil = await GET_PERFIL();
    
    return (
        <div>
            <VerificarUser datosGoogle={datosGoogle} datosPerfil={datosPerfil} />
            <p>Inicio</p>
        </div>
    );
}

