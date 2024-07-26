import express from 'express';
import cors from 'cors';
import { KpiA, KpiB } from './database.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
}));

// Función para seleccionar el modelo basado en los parámetros
const getModel = (schema) => {
  if (schema === 'empresa_a') {
    return KpiA;
  } else if (schema === 'empresa_b') {
    return KpiB;
  }
  return null;
};

// Endpoint para devolver la estructura de la tabla
app.get('/table-structure', async (req, res) => {
  const { schema, table } = req.query;
  
  if (table !== 'kpi') {
    return res.status(400).json({ error: 'Tabla no válida' });
  }

  const model = getModel(schema);

  if (!model) {
    return res.status(400).json({ error: 'Esquema no válido' });
  }

  try {
    const attributes = model.rawAttributes;
    const columns = Object.keys(attributes).map(attr => ({
      name: attr,
      type: attributes[attr].type.key,
    }));

    return res.json(columns);
  } catch (error) {
    console.error('Error al obtener la estructura de la tabla:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
