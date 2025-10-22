import dotenv from 'dotenv';
dotenv.config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

export { DB_URI, PORT, STRIPE_SECRET_KEY, WEBHOOK_SECRET };