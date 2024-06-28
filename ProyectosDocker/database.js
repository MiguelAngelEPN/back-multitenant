// Importar Sequelize y configuraciones necesarias
import { Sequelize } from 'sequelize';

// Configurar la conexión a PostgreSQL
const sequelize = new Sequelize('postgres://postgres:arielconstruex2024@localhost:5432/postgres', {
  dialect: 'postgres',
  define: {
    timestamps: false, // Desactivar la generación automática de timestamps
  },
});

// Definir modelos y asociaciones para cada esquema

// Modelo y asociaciones para empresa_a
const EmpresaA = sequelize.define('empresa_a', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password_hash: Sequelize.STRING,
  role: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

const KpiA = sequelize.define('kpi_a', {
  kpi_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  target_value: Sequelize.DECIMAL(10, 2),
  unit: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

const TaskA = sequelize.define('task_a', {
  task_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  status: Sequelize.STRING,
  due_date: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

// Modelo y asociaciones para empresa_b
const EmpresaB = sequelize.define('empresa_b', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password_hash: Sequelize.STRING,
  role: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

const KpiB = sequelize.define('kpi_b', {
  kpi_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  target_value: Sequelize.DECIMAL(10, 2),
  unit: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

const TaskB = sequelize.define('task_b', {
  task_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  status: Sequelize.STRING,
  due_date: Sequelize.DATE,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

// Definir relaciones entre modelos (por ejemplo, las foreign keys)

// Sincronizar los modelos con la base de datos
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});

// Exportar los modelos y la instancia de Sequelize
export { sequelize, EmpresaA, KpiA, TaskA, EmpresaB, KpiB, TaskB };
