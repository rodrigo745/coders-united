import connectDB from "../../../libs/mongoose";
import datosPerfil from "../../../models/datosPerfil";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB();
    const res = await datosPerfil.find();
    const data = await JSON.parse(JSON.stringify(res));

    return NextResponse.json(data);
}
