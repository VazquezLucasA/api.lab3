import express from 'express'
import indexRoutes from './routes/index.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'

import { PORT } from './config.js'
  
  const app = express()
  
  app.use(express.json())
  
  app.use(indexRoutes)
  app.use('/api' , usuariosRoutes)
  app.use('/api' , productosRoutes)
  
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'endpoint not fund'
    })
  })

  export default app;