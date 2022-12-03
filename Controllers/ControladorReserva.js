import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
import {ServicioReserva} from "../services/SevicioReserva.js"
export class ControladorReserva {

    

    async buscarReservas(req, res) {
        // response.send("Estoy buscando Reservas desde el controlador")
    
        let objetoServicioReserva = new ServicioReserva();
        // response.send("Estoy buscando reservaes desde el controlador")
        try {
          res.status(200).json({
            mensaje: 'Exito en la consulta',
            datos: await objetoServicioReserva.buscarReservas(),
          });
        } catch (error) {
          res.status(400).json({
            mensaje: 'Error en la consulta ' + error,
            datos: null,
          });
        }
      }
    
      async buscarReservaPorId(req, res) {
        // response.send('Estoy buscando una Reservas por id desde controlador');
        // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
        let id = req.params.idReserva;
        let objetoServicioReserva = new ServicioReserva();
        try {
          res.status(200).json({
            mensaje: 'Exito en la consulta ' + id,
            datos: await objetoServicioReserva.buscarReservaPorId(id),
          });
        } catch (error) {
          res.status(400).json({
            mensaje: 'Error en la consulta ' + error,
            datos: null,
          });
        }
      }
    
      async registrarReserva(req, res) {
        // response.send('Estoy agregando una Reservas desde el controlador');
    
        //debo validar que exista habitacion
        let datosReserva = request.body;
        //llamando al servicio de habitacion
    
        let objetoServicioHabitacion = new ServicioHabitacion();
        let objetoServicioReserva = new ServicioReserva();
    
        try {
          let habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion);
    
          if (habitacion) {
            // Validar la cantidad de personas debe ser menor o igual a la maxima permitida en esta habitacion
            if (datosReserva.numeroAdultos + datosReserva.numeroNinos > habitacion.numeroMaximoPersonas){
              res.status(400).json({
                mensaje: 'La cantidad de personas (' + (datosReserva.numeroAdultos + datosReserva.numeroNinos) + ') supera la maxima permitida para esta habitacion: ' + habitacion.numeroMaximoPersonas,
                datos: null,
              });
            } else {
              let numeroNoches = (new Date(datosReserva.fechaSalida) - new Date(datosReserva.fechaIngreso)) / (1000 * 3600 * 24) - 1;
              datosReserva.costoReserva = habitacion.valorNoche * numeroNoches;
      
              await objetoServicioReserva.agregarReservaEnBd(datosReserva);
              res.status(200).json({
                mensaje: 'Exito en el registro de reserva ',
                datos: null,
              });
            }
          } else {
            res.status(400).json({
              mensaje: 'la habitacion no esta disponible',
              datos: null,
            });
          }
        } catch (error) {
          res.status(400).json({
            mensaje: 'Error en la consulta ' + error,
            datos: null,
          });
        }
      }
    
      async editarReserva(req, res) {
        //recibiendo el id como parametro
        let id = req.params.idReserva;
    
         //recibir los datos con los que voy a editar (BODY)
        let datosReserva = req.body;
    
        //Llamo al servicio reserva
        let objetoServicioReserva = new ServicioReserva();
    
        try {
          await objetoServicioReserva.editarReserva(id, datosReserva);
    
          res.status(200).json({
            mensaje: 'Exito editando la reserva con  id ' + id,
            datos: null,
          });
        } catch (error) {
          res.status(400).json({
            mensaje: 'Error en la consulta ' + error,
            datos: null,
          });
        }
      }
    
      async eliminaReserva(req, res) {
        // response.send('Estoy buscando una Reservas por id desde controlador');
        // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
        let id = req.params.idReserva;
        let objetoServicioReserva = new ServicioReserva();
        try {
          await objetoServicioReserva.eliminaReserva(id),
          res.status(200).json({
            mensaje: 'Exito eliminando ' + id,
            datos:null
          });
        } catch (error) {
          res.status(400).json({
            mensaje: 'Error en la consulta ' + error,
            datos: null,
          });
        }
      }
    }
