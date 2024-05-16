import mongoose from "mongoose";
import { Schema } from "mongoose";

const proyecto = new Schema({
    titulo: String,
    estado: String,      
    descripcion: String,
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
    evaluacion: Array,
    enlaces: Array,      
    reuniones: Array,  
    proteccion: Boolean,
    chat: Array,
    adicional_uno: Array,
    adicional_dos: Number,
    adicional_tres: Array
})
export default mongoose.model.Proyecto || mongoose.model("Proyecto", proyecto);

