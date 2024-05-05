import connectDB from "../../../../libs/mongoose";
import datosPerfil from "../../../../models/datosPerfil";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();
    const res = await request.json();
    const data = await datosPerfil.create(res);

    return NextResponse.json(data);
}


export async function PUT(request, { params }) {
    await connectDB();

    try {
        // Obtener los datos existentes
        const res = await datosPerfil.findById(params.id);

        // Parsear los datos de la solicitud
        const nuevosDatos = await request.json();

        // Actualizar los datos
        const actualizado = await datosPerfil.findByIdAndUpdate(
            params.id, // ID del documento que deseas actualizar
            nuevosDatos, // Los nuevos datos que deseas aplicar
            { new: true } // Para devolver el documento actualizado
        );

        // Devolver el documento actualizado como respuesta
        return NextResponse.json(actualizado);
    } catch (error) {
        // Manejar errores si ocurrieron durante el proceso de actualización
        console.error("Error al actualizar los datos:", error);
        return NextResponse.error(error);
    }
}