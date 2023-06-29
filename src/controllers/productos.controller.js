import { pool } from "../db.js";

// controlador para traer los productos: método GET
export const getProductos = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos')
        res.json(rows)
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}

// controlador para devolver un solo producto: método GET
export const getProducto = async (req, res) =>{
    try {
            const [rows] = await pool.query('SELECT * FROM Productos WHERE idProducto = ?', [req.params.id])
        if (rows.length <=0){
            return res.status(404).json({message: 'Producto no encontrado'}) /*esto es para que cuando se ponga un id que no exista*/
        }   
        res.json(rows[0])
    } 
    catch (error) {
        
    }
}

// controlador para añadir un producto: método POST
export const postProductos = async (req,res) => {
    try {
        const {nombre, descripcion, precio, descuento} = req.body;
        const [rows] = await pool.query('INSERT INTO Productos (nombre, descripcion, precio, descuento) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, descuento])
        res.send({
            mensaje: 'producto creado',
            id: rows.insertId,
            nombre,
            descripcion,
            precio,
            descuento,
        })
    } 
    catch (error) {
        res.status(500).send('Error');
    }
}

// controlador para editar un producto: método PUT
export const putProductos = async (req,res) => {
    try {
        const {id} = req.params
        const {idProducto, nombre, descripcion, precio, descuento} = req.body
        const [result] = await pool.query('UPDATE Productos SET nombre = ?, descripcion = ?, precio = ?, descuento = ? WHERE idProducto = ?', [nombre, descripcion, precio, descuento, idProducto])

        if(result.affectedRows === 0) {
            return res.status(404).json({message: 'Producto no encontrado'})
        }

        const [rows] = await pool.query('SELECT * FROM Productos WHERE idProducto = ?', [idProducto])
        res.json({
            mensaje: 'producto modificado',
            id: rows.insertId,
            nombre,
            descripcion,
            precio,
            descuento,
        })
        /*Se puede usar patch para hacer que solamente un dato se actualice, aquí con la función ifNull(?)*/
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}

// controlador para eliminar un producto: método DELETE

export const deleteProductos = async (req,res) => {
    try {
        const { idProducto } = req.body
        const [result] = await pool.query('DELETE FROM Productos WHERE idProducto = ?; ', [idProducto])
        if(result.affectedRows < 1){
            return res.status(404).json({message: 'Producto no encontrado'})
        }
        else{
            res.send('producto eliminado')
        }
    } 
    catch (error) {
        res.status(500).send('Error')
    }
}


