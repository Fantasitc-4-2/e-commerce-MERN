process.loadEnvFile();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

export { DB_URI, PORT };
