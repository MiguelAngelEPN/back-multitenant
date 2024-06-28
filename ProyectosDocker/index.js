// Importar dependencias
import express from 'express';
import cors from 'cors';
import pg from 'pg'; // Importa el módulo pg como CommonJS

// Desestructura Pool del objeto importado
const { Pool } = pg;

// Configuración de conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'arielconstruex2024',
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Crear aplicación de Express
const app = express();

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto por el origen de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
}));

// Rutas de Express
app.get('/empresa_a/users', async (_req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM empresa_a.users');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios de empresa A:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/empresa_b/users', async (_req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM empresa_b.users');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios de empresa B:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
