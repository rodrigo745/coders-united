import VerificarUser from "../../../../../components/verificarUser/verificarUser"
import { GET } from "../../../../api/usuarioGoogle/[id]/route";

export default async function Inicio() {
    // Obtengo los datos de la BD y los envio al componente "VerificarUser" para comparar
    const datos = await GET();

    return (
        <div>
            <VerificarUser datos={datos} />
            Inicio
        </div>
    );
}

