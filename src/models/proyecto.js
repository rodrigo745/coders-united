import mongoose from "mongoose";
import { Schema } from "mongoose";

const proyecto = new Schema({
    titulo: String,
    estado: String,      
    descripción: String,
    tareas: Array,   
    integrantes: Array,
    inicio_proyecto: Date,
    final_estimado: Date,
    fin_real: Date,
    tiempo_en_desarrollo: Number, 
    requerimientos: Array,
    diagramas: Array,
    notas: Array,
    repositorio: Array,         
    contabilidad:  Array,
    evaluación: Array,
    enlaces: Array,      
    reuniones: Array,  
    protección: Boolean,
    chat: Array
})
export default mongoose.model.Proyecto || mongoose.model("Proyecto", proyecto);

