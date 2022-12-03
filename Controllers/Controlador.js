export {ServicioHabitacion} from "../services/ServicioHabitacion.js"
export class Controlador{

    constructor(){}

    async buscarHabitaciones(req, res){

        let objetoServicioHabitacion=new ServicioHabitacion
        try{
            res.status(200).json({
            "mensaje":"Exito en la consulta",
            "datos": await objetoServicioHabitacion.buscarHabitaciones(),
         })
        }catch(error){
             res.status(400).json({
            "mensaje":"error en la consulta"+error,
            "datos":null,
        })
       
        }
    }

    async buscarHabitacionPorId(req, res){
        let id=req.params.editarHabitacion
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{

            res.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(id),
            })
        }catch(error){

            res.status(400).json({
                "mensaje":"error en la consulta",error,
                "datos":null,
            })
        }
    }
    
     async registrarHabitacion(req, res){
      let datosHabitacion=req.body
      let objetoServicioHabitacion=new ServicioHabitacion()

      try{

        if(datosHabitacion.numeroMaxioPersonas<8){

            await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)

            res.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":null
            })
        }else{

            res.status(400).json({
                "mensaje":"No hay espacio",
                "datos":null
            })
        }
      }catch(error){

        res.status(400).json({
            "mensaje":"error en la consulta "+error,
            "datos":null,
        })
      }
    }
      

    async editarHabitacion(req, res){
        let id = req.params.editarHabitacion
        let datosHabitacion = req.body

        let objetoServicioHabitacion=new ServicioHabitacion()

    try{

        await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)

        response.status(200).json({
            "mensaje":"esxito editando"+id,
            "datos":null,
        })

    } catch(error){

        res.status(400).json({
            "mensaje":"error en la edicion "+error,
            "datos":null,
        })
     }
   }
 }
