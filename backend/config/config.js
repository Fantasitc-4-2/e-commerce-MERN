process.loadEnvFile();

DB_URI = process.env.DB_URI;
PORT = process.env.PORT
module.exports = {
  DB_URI,
  PORT
};
