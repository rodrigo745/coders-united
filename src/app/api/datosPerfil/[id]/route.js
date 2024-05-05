import connectDB from "../../../../libs/mongoose";
import datosPerfil from "../../../../models/datosPerfil";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();
    const res = await request.json();
    const data = await datosPerfil.create(res);

    return NextResponse.json(data);
}

