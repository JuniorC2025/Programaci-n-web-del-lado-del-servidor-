import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import express from 'express';
import dotenv from 'dotenv';

// Configuración inicial
dotenv.config();
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para application/x-www-form-urlencoded

// Conexión a MongoDB
let db;
let client;

async function connectToDatabase() {
    try {
        client = new MongoClient(process.env.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        db = client.db("test"); // Base de datos "test" (o la que uses)
        console.log("Conectado a MongoDB");

        // Verificar conexión con un ping
        await db.command({ ping: 1 });
        console.log("Ping a MongoDB exitoso");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1); // Cierra la aplicación si hay error
    }
}

// Middleware para asegurar conexión antes de las rutas
app.use(async (req, res, next) => {
    if (!db) {
        await connectToDatabase();
    }
    next();
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API CRUD con MongoDB Driver');
});

// CREATE (POST)
app.post('/usuarios', async (req, res) => {
    try {
        const result = await db.collection('usuarios').insertOne(req.body);
        res.status(201).json({
            _id: result.insertedId,
            ...req.body
        });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear usuario" });
    }
});

// READ ALL (GET)
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

// READ ONE (GET by ID)
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await db.collection('usuarios').findOne({
            _id: new ObjectId(req.params.id)
        });

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error al obtener usuario" });
    }
});

// UPDATE (PUT)
app.put('/usuarios/:id', async (req, res) => {
    try {
        const result = await db.collection('usuarios').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario actualizado con exito" });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
});

// DELETE (DELETE)
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const result = await db.collection('usuarios').deleteOne({
            _id: new ObjectId(req.params.id)
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
});

// Iniciar servidor
app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Servidor en http://localhost:${PORT}`);
});

// Cierre limpio al terminar la aplicación
process.on('SIGINT', async () => {
    if (client) {
        await client.close();
        console.log("Conexión a MongoDB cerrada");
    }
    process.exit();
});



