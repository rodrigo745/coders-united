import ActualizarDatos from "../../../../../../components/datosPersonales/actualizarDatos";
import connectDB from "../../../../../../libs/mongoose";
import datosPerfil from "../../../../../../models/datosPerfil";

async function LoadDatos(){
    await connectDB();
    const res = await datosPerfil.find();
    const data = await JSON.parse(JSON.stringify(res));

    return data;
}

export default async function Perfil(){


    const datos = await LoadDatos();

    return(
        <div>
            <ActualizarDatos datos={datos}/>
        </div>
    )
}