import cors from 'cors';
import express from 'express';

import authRouter from './modules/auth/routes/v1/auth.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);

export default app;
