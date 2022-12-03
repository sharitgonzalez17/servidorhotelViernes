import * as dotenv from 'dotenv'
dotenv.config()

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorHotel=new ServidorAPI() //Instancia de una clase (OBJETO)
servidorHotel.despertarServidor()




