import connectDB from "../../../../../libs/mongoose";
import proyecto from "../../../../../models/proyecto";
import { NextResponse } from "next/server";

export async function GET(res, {params}){
    await connectDB();
    const obtener = await proyecto.findById(params.id);
    const trans = await JSON.parse(JSON.stringify(obtener));
    return NextResponse.json(trans);
}
