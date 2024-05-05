import mongoose from "mongoose";
import { Schema } from "mongoose";

const datosPerfile = new Schema({
    correo: String,
    nombre_real: String,
    edad: Number,
    ubicacion: String,
});

export default mongoose.models.datosPerfile || mongoose.model("datosPerfile", datosPerfile)