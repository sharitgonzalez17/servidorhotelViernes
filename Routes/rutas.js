import express from "express"

import { Controlador } from "../Controllers/Controlador.js"
let controlador =new Controlador()  //Usando el controlador

import { ControladorReserva } from "../Controllers/ControladorReserva.js"
let controladorReserva =new ControladorReserva()

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelSagi/habitaciones',controlador.buscarHabitaciones)
rutasPersonalizadas.get('/hotelSagi/habitacion/:idHabitacion',controlador.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelSagi/habitacion', controlador.registrarHabitacion)
rutasPersonalizadas.put('/hotelSagi/habitacion/:idHabitacion', controlador.editarHabitacion);

rutasPersonalizadas.get('/hotelSagi/reservas', controladorReserva.buscarReservas);
rutasPersonalizadas.get('/hotelSagi/reserva/:idReserva', controladorReserva.buscarReservaPorId);
rutasPersonalizadas.post('/hotelSagi/reserva', controladorReserva.registrarReserva);
rutasPersonalizadas.put('/hotelSagi/reserva/:idReserva', controladorReserva.editarReserva);
rutasPersonalizadas.delete('/hotelSagi/reserva/:idReserva', controladorReserva.eliminaReserva);
