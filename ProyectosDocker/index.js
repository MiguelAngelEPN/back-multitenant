// Importar dependencias
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Crear esquema de Mongoose
const animalSchema = new mongoose.Schema({
  tipo: String,
  estado: String,
});

const Animal = mongoose.model('Animal', animalSchema);

// Crear aplicación de Express
const app = express();

// Habilitar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto por el origen de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
}));

// Conectar a MongoDB
mongoose.connect('mongodb://migue:password@localhost:27017/miapp?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas de Express
app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...');
  const animales = await Animal.find();
  return res.send(animales);
});

app.get('/crear', async (_req, res) => {
  console.log('creando...');
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' });
  return res.send('ok');
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('listening...');
});
