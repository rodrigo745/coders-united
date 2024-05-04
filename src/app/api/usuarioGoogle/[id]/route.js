import connectDB from "../../../../libs/mongoose";
import userGoogle from "../../../../models/userGoogle";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();
    const res = await request.json();
    const datos = await userGoogle.create(res)
    return NextResponse.json(datos);
}

export async function GET(){
    await connectDB();
    const res = await userGoogle.find();
    const datos = JSON.parse(JSON.stringify(res));
    return datos;
}