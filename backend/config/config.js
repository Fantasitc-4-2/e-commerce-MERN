process.loadEnvFile();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;
const cloud_name= process.env.CLOUD_NAME;
const cloud_key = process.env.CLOUD_KEY;
const cloud_secret = process.env.CLOUD_SECRET;
export { DB_URI, PORT, cloud_name, cloud_key, cloud_secret };
