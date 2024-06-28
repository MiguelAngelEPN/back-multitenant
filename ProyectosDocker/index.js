import express from 'express';
import Sequelize from 'sequelize';

const app = express();

const sequelize = new Sequelize('postgres', 'postgres', 'arielconstruex2024', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: false, // Evitar que Sequelize agregue timestamps automáticamente
  },
});

// Definir el modelo para la tabla empresas
const Empresa = sequelize.define('empresas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  nombre: Sequelize.STRING,
  esquema_id: Sequelize.INTEGER,
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos conectada y modelos sincronizados.');
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });

// Ruta para obtener el nombre del esquema según el id
app.get('/api/esquema-nombre/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Empresa.findOne({
      attributes: [
        [sequelize.literal(`CASE esquema_id
                             WHEN 1 THEN 'empresa_a'
                             WHEN 2 THEN 'empresa_b'
                             ELSE 'Esquema no encontrado'
                          END`), 'esquema_nombre'],
      ],
      where: {
        id: id,
      },
    });

    if (!result) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    res.json(result);
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor Express
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
