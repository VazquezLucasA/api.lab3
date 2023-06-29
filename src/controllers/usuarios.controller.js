import { pool } from "../db.js";

// controlador para traer los usuarios: método GET
export const getUsuarios = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios')
        res.json(rows)
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}

// controlador para devolver un solo usuario: método GET
export const getUsuario = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario = ?', [req.params.id])
        if (rows.length <=0) return res.status(404).json({message: 'Usuario no encontrado'}) /*esto es para que cuando se ponga un id que no exista*/
        res.json(rows[0])
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}

// controlador para añadir un usuario: método POST
export const postUsuarios = async (req,res) => {
    try {
        const {nombre, contraseña, tipoUsuario} = req.body
        const [rows] = await pool.query('insert into usuarios(nombre, contraseña, tipoUsuario) values(?,?,?)',[nombre, contraseña, tipoUsuario])
        res.send({
            mensaje: "usuario creado",
            id: rows.insertId,
            nombre,
            contraseña,
            tipoUsuario
         })
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}

// controlador para editar un usuario: método PUT
export const putUsuarios = async (req,res) => {
    try {
        const {id} = req.params
        const {idUsuario, nombre, contraseña, tipoUsuario} = req.body
        const [result] = await pool.query('UPDATE Usuarios SET nombre = ?, contraseña = ?, tipoUsuario = ? WHERE idUsuario = ?', [nombre, contraseña, tipoUsuario, idUsuario])

        if(result.affectedRows === 0) {
            return res.status(404).json({message: 'Usuario no encontrado'})
        }

        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario = ?', [idUsuario])
        res.json({
            mensaje: 'Usuario modificado',
            id: rows.insertId,
            nombre,
            contraseña,
            tipoUsuario
        })
        /*Se puede usar patch para hacer que solamente un dato se actualice, aquí con la función ifNull(?)*/
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}


// controlador para eliminar un usuario: método DELETE
export const deleteUsuarios = async (req,res) => {
    try {
        const { idUsuario } = req.body
        const [result] = await pool.query('DELETE FROM Usuarios WHERE idUsuario = ?; ', [idUsuario])
        if(result.affectedRows < 1){
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
        else{
            res.send('Usuario eliminado')
        }
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}


