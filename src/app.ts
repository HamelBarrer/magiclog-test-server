import cors from 'cors';
import express from 'express';

import authRouter from './modules/auth/routes/v1/auth.route';
import productRouter from './modules/products/routes/v1/product.router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);

export default app;
