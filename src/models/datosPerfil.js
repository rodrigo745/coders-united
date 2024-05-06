import mongoose from "mongoose";
import { Schema } from "mongoose";

const datosPerfile = new Schema({
    correo: String,
    nombre_real: String,
    edad: Number,
    ubicacion: String,
    rama: String,
    puesto: String,
    disponibilidad: String,
    portafolio: String,
    dato_adicional: String,
    telefono: Number,
    linkedin: String,
    github: String,
    social_uno: String,
    social_dos: String,
    social_tres: String,
    biografia: String
});

export default mongoose.models.datosPerfile || mongoose.model("datosPerfile", datosPerfile)