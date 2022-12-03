import { modeloHabitacion } from "../Models/ModeloHabitacion.js"

export class ServicioHabitacion{

    async buscarHabitaciones(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionPorId(){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionEnBD(datos){
        let datosValidos=new modeloHabitacion(datos)
        return datosValidos.save()
    }

    async editarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
}