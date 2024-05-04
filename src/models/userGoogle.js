import { Schema } from "mongoose";
import mongoose from "mongoose";

const usuarios = new Schema({
    nombre: String,
    correo: String,
    imagen: String
})

export default mongoose.models.usuarios || mongoose.model("usuarios", usuarios);