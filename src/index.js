/*
  Trabajo práctico N° 2 en concepto de trabajo final para la materia Laboratorio de computación 2.
  -Dorado, Rocío
  -Vazquez, Lucas Alejo
  Universidad Tecnológica Nacional. 2023.
*/ 

// INSTALAR:
// npm init
// npm i express
// npm i mysql2
// npm i nodemon -D  
// npm i
// EN PACKAGE JSON  "scripts": {
  //    "dev": "nodemon index.js"
  //  },

 
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

app.listen(PORT)

console.log('server running in ' + PORT)
