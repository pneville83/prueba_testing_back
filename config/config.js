function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: console.log,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'johnpeter83',
    database: 'peter_pruebas',
    host: 'localhost',
    port: 5432,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
  },
};

export default config;