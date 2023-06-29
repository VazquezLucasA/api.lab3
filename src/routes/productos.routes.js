import { Router } from "express";
import { getProductos } from '../controllers/productos.controller.js'
import { getProducto } from "../controllers/productos.controller.js"
import { postProductos } from '../controllers/productos.controller.js'
import { putProductos } from '../controllers/productos.controller.js'
import { deleteProductos } from '../controllers/productos.controller.js'

const router = Router()

router.get('/productos', getProductos)    

router.get ('/productos/:id', getProducto)

router.post('/productos', postProductos) 

router.put('/productos', putProductos) 

router.delete('/productos', deleteProductos)    

export default router