import connectDB from "../../../libs/mongoose";
import datosPerfil from "../../../models/datosPerfil";

export async function GET(){
    await connectDB();
    const res = await datosPerfil.find();
    const data = await JSON.parse(JSON.stringify(res));
    return data;
}
