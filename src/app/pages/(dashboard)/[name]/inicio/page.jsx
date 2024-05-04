import VerificarUser from "../../../../../components/verificarUser/verificarUser"
import { GET } from "../../../../api/usuarioGoogle/[id]/route";

export default async function Inicio() {
    
    const datos = await GET();

    return (
        <div>
            <VerificarUser datos={datos} />
        </div>
    );
}

