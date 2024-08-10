import { Request, Response } from 'express';
import { safeParse } from 'valibot';
import {
  findAllProduct,
  findAllProviders,
  insertProduct,
} from '../repositories/product.repository';
import { CreateProductSchema } from '../schemas/product.schema';

export const getProducts = async (req: Request, res: Response) => {
  const provider = req.query.provider;
  let providerIds = undefined;
  if (provider) {
    providerIds = JSON.parse(provider as string);
  }
  let userId = providerIds ?? [req.userId];
  if (!userId) {
    userId = 0;
  }
  const data = await findAllProduct(userId);
  res.status(200).json(data);
};

export const getProviders = async (_: Request, res: Response) => {
  const data = await findAllProviders();
  res.status(200).json(data);
};

export const createProductController = async (req: Request, res: Response) => {
  const result = safeParse(CreateProductSchema, req.body);
  if (!result.success) {
    const [error] = result.issues;
    res.status(400).json({ error: error.message });
    return;
  }
  const { userId, name, price, quantity, sku } = result.output;
  const data = await insertProduct({ name, price, quantity, sku, userId });
  res.status(200).json(data);
};
