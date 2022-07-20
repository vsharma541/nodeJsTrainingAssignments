import dotenv1 from 'dotenv';

dotenv1.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mycluster.ytbwxbv.mongodb.net/ts-db?retryWrites=true&w=majority`;

const PORT = Number(process.env.PORT) || 3000;

export const myConfig = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
}