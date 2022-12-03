import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({

    nombre:{
        req:true,
        type:String
    },
    valorNoche:{
        req:true,
        type:String
    },
    descripcion:{
        req:true,
        type:String
    },
    fotografia:{
        req:true,
        type:[String]
    },
    numeroMaximoPersonas:{
        req:true,
        type:Number
    }
});

export const modeloHabitacion=mongoose.model('habitaciones',EsquemaHabitacion)