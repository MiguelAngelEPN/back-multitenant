import { Sequelize } from 'sequelize';

// Configurar la conexión a PostgreSQL
const sequelize = new Sequelize('postgres://postgres:arielconstruex2024@localhost:5432/postgres', {
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
});

// Definir modelos y asociaciones para cada esquema en base de datos
const KpiA = sequelize.define('kpi', {
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
  primer_empresa: Sequelize.STRING,
}, {
  schema: 'empresa_a',
});

const KpiB = sequelize.define('kpi', {
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
}, {
  schema: 'empresa_b',
});

// Exportar los modelos y la instancia de Sequelize
export { sequelize, KpiA, KpiB };
