// Importar dependencias
import express from 'express';
import cors from 'cors';
import { sequelize, EmpresaA, KpiA, TaskA, EmpresaB, KpiB, TaskB } from './database.js';

// Crear aplicación de Express
const app = express();

// Habilitar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto por el origen de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
}));

// Rutas de Express para empresa_a
app.get('/empresa_a/users', async (_req, res) => {
  try {
    const users = await EmpresaA.findAll();
    return res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios de empresa_a:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/empresa_a/kpis', async (_req, res) => {
  try {
    const kpis = await KpiA.findAll();
    return res.json(kpis);
  } catch (error) {
    console.error('Error al obtener KPIs de empresa_a:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/empresa_a/tasks', async (_req, res) => {
  try {
    const tasks = await TaskA.findAll();
    return res.json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas de empresa_a:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Rutas de Express para empresa_b (similar estructura)
app.get('/empresa_b/users', async (_req, res) => {
  try {
    const users = await EmpresaB.findAll();
    return res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios de empresa_b:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/empresa_b/kpis', async (_req, res) => {
  try {
    const kpis = await KpiB.findAll();
    return res.json(kpis);
  } catch (error) {
    console.error('Error al obtener KPIs de empresa_b:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/empresa_b/tasks', async (_req, res) => {
  try {
    const tasks = await TaskB.findAll();
    return res.json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas de empresa_b:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
