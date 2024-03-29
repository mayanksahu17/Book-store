import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app: Express = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN as string,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

import router from './routes/user.route'




export { app };
