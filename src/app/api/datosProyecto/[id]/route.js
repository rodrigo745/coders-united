import connectDB from "../../../../libs/mongoose";
import proyecto from "../../../../models/proyecto";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();
    const datos = await request.json();
    const agregar = await proyecto.create(datos);
    return NextResponse.json(agregar);
}
export async function GET(){
    await connectDB();
    const obtener = await proyecto.find();
    const trans = await JSON.parse(JSON.stringify(obtener));
    return trans;
}