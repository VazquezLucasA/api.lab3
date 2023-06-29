import { Router } from "express";
import { getUsuarios } from '../controllers/usuarios.controller.js'
import { getUsuario } from "../controllers/usuarios.controller.js";
import { postUsuarios } from '../controllers/usuarios.controller.js'
import { putUsuarios } from '../controllers/usuarios.controller.js'
import { deleteUsuarios } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuarios', getUsuarios)  

router.get ('/usuarios/:id', getUsuario)

router.post('/usuarios', postUsuarios) 

router.put('/usuarios', putUsuarios)    

router.delete('/usuarios', deleteUsuarios)  

export default router