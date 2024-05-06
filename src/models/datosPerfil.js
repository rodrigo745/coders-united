import mongoose from "mongoose";
import { Schema } from "mongoose";

const datosPerfil = new Schema({
    correo: String,
    nombre_real: String,
    edad: Number,
    ubicacion: String,
    rama: String,
    puesto: String,
    disponibilidad: String,
    portafolio: String,
    dato_adicional: String,
    herramientas: Array,
    telefono: Number,
    linkedin: String,
    github: String,
    social_uno: String,
    social_dos: String,
    social_tres: String,
    biografia: String
});

export default mongoose.models.datosPerfil || mongoose.model("datosPerfil", datosPerfil)