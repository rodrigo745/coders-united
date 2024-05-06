import mongoose from "mongoose";
import { Schema } from "mongoose";

const datosPerfil = new Schema({
    correo: String,
    nombre_real: String,
    edad: Number,
    ubicacion: String,
    rama: String,
    puesto: String,
    disponibilidad: String
});

export default mongoose.models.datosPerfil || mongoose.model("datosPerfil", datosPerfil)